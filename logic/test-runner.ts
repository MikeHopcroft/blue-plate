import {
  createMenuBasedRepairFunction,
  enumerateTestCases,
  GenericCase,
  logicalCartFromCart,
  LogicalScoredSuite,
  LogicalValidationSuite,
  ScoredStep,
  scoreSuite,
  speechToTextFilter,
  State,
  TextTurn,
  ValidationStep,
  World
} from 'prix-fixe';

import { ShortOrderWorld } from 'short-order';

export interface TestResult {
  id: number;
  passed: boolean;
  repairs: number;
  expected: GenericCase<ValidationStep<TextTurn>>;
  scored: GenericCase<ScoredStep<TextTurn>>;
}

export type AllTestResults = Map<number, TestResult>;

export async function runTests(
  world: World,
  shortOrderWorld: ShortOrderWorld,
  expected: LogicalValidationSuite<TextTurn>
): Promise<AllTestResults> {
  //
  // Run each test case.
  //
  console.log('before test run');
  const observed: LogicalValidationSuite<TextTurn> = { tests: [] };
  for (const test of enumerateTestCases(expected)) {
    let state: State = { cart: { items: [] } };
    const steps: typeof test.steps = [];
    for (const step of test.steps) {
      for (const turn of step.turns) {
        try {
          const filtered = speechToTextFilter(turn.transcription);
          state = await shortOrderWorld.processor(filtered, state);
        } catch (e) {
          // TODO: record the error here, somehow.
        }
      }
      const cart = logicalCartFromCart(state.cart, world.catalog);
      steps.push({ ...step, cart });
    }
    observed.tests.push({ ...test, steps });
  };

  //
  // Score the results
  //
  const repairFunction = createMenuBasedRepairFunction(
    world.attributeInfo,
    world.catalog
  );
  const scored = scoreSuite(observed, expected, repairFunction, 'menu-based') as LogicalScoredSuite<TextTurn>;
  console.log(scored);

  //
  // Compile the results map
  //
  const e = [...enumerateTestCases(expected)];
  const s = [...enumerateTestCases(scored)];
  const results = new Map<number, TestResult>();
  for (const [index, test] of s.entries()) {
    const id = test.id;
    const repairs = test.steps.reduce((p, c) => p + c.measures.repairs!.cost, 0);
    const passed = repairs === 0;
    results.set(
      id,
      {
        id,
        passed,
        repairs,
        expected: e[index],
        scored: s[index]
      }
    )
  }

  return results;
}