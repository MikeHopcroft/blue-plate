import { cartFromlogicalCart, ICatalog, Measures } from 'prix-fixe';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FaCheck, FaKeyboard, FaTimes } from 'react-icons/fa';
import { connect } from 'react-redux'

import { ApplicationState } from '../actions';
import { AllTestResults, TestResult } from '../logic';

import { renderItemList } from './item-list';
import { createMasterDetail } from './master-detail-control';

import styles from './controls.module.css';

class Master extends React.Component<{
  testResults: AllTestResults,
  selected?: string
}> {
  render() {
    if (!this.props.testResults) {
      return null;
    } else {
      const tests = [...this.props.testResults.values()];
      return tests.map((test, index) => {
        const name = test.id.toString();
        const repairs = test.repairs;
        const icon = test.passed ? 
          <FaCheck style={{color: 'green'}}/> : 
          <FaTimes style={{color: 'red'}}/>;
        return (
          <Nav.Item key={name} style={{paddingTop: '0', paddingBottom: '0'}}>
            <Nav.Link
              style={{whiteSpace: 'nowrap', paddingTop: '0', paddingBottom: '0'}}
              eventKey={name}
            >
              {icon} {name} (repairs={repairs})
            </Nav.Link>
          </Nav.Item>
        );
      });
    }
  }

  static connect() {
    return connect((application: ApplicationState) => ({
      testResults: application.testResults,
    }))(Master);
  }
}

class Detail extends React.Component<{
  catalog: ICatalog,
  testResults: AllTestResults,
  selected?: string
}> {
  render() {
    if (this.props.selected === undefined) {
      return null;
    }
    const test = this.props.testResults.get(Number(this.props.selected));
    return (
      <div>
        <h1>Test {this.props.selected}</h1>
        <div>{ test.expected.comment }</div>
        <div><b>Suites:</b> {test.expected.suites}</div>
        { this.renderSteps(test) }
      </div>
    )
  }

  renderSteps(test: TestResult) {
    const steps = [];
    for (let i = 0; i < test.expected.steps.length; ++i) {
      steps.push(this.renderOneStep(test, i));
    }
    return steps;
  }

  renderOneStep(test: TestResult, index: number) {
    const step = test.scored.steps[index];
    const expected = cartFromlogicalCart(
      test.expected.steps[index].cart,
      this.props.catalog
    );
    const observed = cartFromlogicalCart(
      step.cart,
      this.props.catalog
    );
    const measures = step.measures;

    return (
      <div key={index}>
        <div style={{marginTop: '2ex'}}>
          <b>Step {index}:</b> &nbsp;
          {step.measures.repairs.cost > 0 ? 
            <span style={{backgroundColor: 'red', color: 'yellow'}}>Failed</span> : 
            <span style={{backgroundColor: 'forestgreen', color: 'yellow'}}>Passed</span>}
        </div>
        { step.turns.map((x, index) => 
          <div key={index}>
            <b>{x.speaker}:</b> <i>"{x.transcription}"</i>
            <FaKeyboard style={{color: 'blue', marginLeft: '4px'}}/>
          </div>
        )}
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{backgroundColor: 'lightblue', marginRight: '1em'}}>
            <b>Expected</b>
            { renderItemList(
                this.props.catalog,
                expected.items
              )
            }
          </div>
          <div style={{backgroundColor: 'lightblue', marginRight: '1em'}}>
            <b>Observed</b>
            { renderItemList(
                this.props.catalog,
                observed.items
              )
            }
          </div>
          { this.renderRepairs(measures)}
        </div>  
      </div>
    )
  }

  renderRepairs(measures: Measures) {
    if (measures.repairs.cost === 0) {
      return null;
    } else {
      return (
        <div style={{backgroundColor: 'lightblue'}}>
          <b>Repairs</b>
          { measures.repairs.steps.map((x,i) => <div key={i}>{x}</div>) }
        </div>
      );
    }
  }

  static connect() {
    return connect((application: ApplicationState) => ({
      catalog: application.world.catalog,
      testResults: application.testResults,
    }))(Detail);
  }
}

class Drilldown extends React.Component<{
  selected: string
}> {
  render() {
    console.log('Drilldown render');
    return <h1>Drilldown</h1>
  }
}

const MasterDetail = createMasterDetail(
  Master.connect(),
  Detail.connect(),
  Drilldown
);

export default MasterDetail;
