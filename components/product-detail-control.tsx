import {
  aliasesFromPattern,
  AttributeDescription,
  ICatalog,
  Key,
  PID,
  patternFromExpression,
  World,
  GenericTypedEntity,
  Dimension
} from 'prix-fixe';
import { FaCheckCircle } from 'react-icons/fa';

import React from 'react';
import { connect } from 'react-redux'

import { ApplicationState } from "../actions";

import styles from './controls.module.css';

interface Props {
  world: World;
  currentPID: PID;
};

class ProductDetailControl extends React.Component<Props> {
  render() {
    return (
      <div>
        {renderGeneric(this.props.world, this.props.currentPID)}
      </div>
    );
  }
}

export function renderGeneric(world: World, pid: PID) {
  const catalog = world.catalog;
  if (!catalog.hasPID(pid)) {
    return <div>Unknown PID {pid}</div>;
  } else {
    const item = catalog.getGeneric(pid);
    return (
      <div>
        <h1>{item.name} ({item.pid})</h1>
        {renderProductAliases(item)}
        {renderProductAttributes(world, item)}
        {renderLegalSpecifics(world, item)}
        {renderLegalOptions(world, item)}
        {renderExlusionSets(world, item)}
      </div>
    );
  }
}

function renderProductAttributes(
  world: World,
  item: GenericTypedEntity
) {
  const tensor = world.attributeInfo.getTensor(item.tensor);
  return (
    <div>
      <div style={{fontWeight: 'bold'}}>Attributes:</div>
      {tensor.dimensions.map(renderDimension)}
    </div>
  );

  function renderDimension(dimension: Dimension, index: number) {
    return (
      <div className={styles.nested} key={index}>
        <div style={{fontWeight: 'bold'}}>{dimension.name}</div>
        {dimension.attributes.map(renderAttribute)}
      </div>
    )
  }

  function renderAttribute(attribute: AttributeDescription, index: number) {
    return (
      <div className={styles.nested} key={index}>
        { renderAliases(attribute.aliases)}
      </div>
    )
  }
}

function renderProductAliases(item: GenericTypedEntity) {
  return (
    <div>
      <div style={{fontWeight: 'bold'}}>Aliases:</div>
      {renderAliases(item.aliases)}
    </div>
  )
}

function renderAliases(aliases: string[]) {
  const output: string[] = [];
  for (const alias of aliases) {
    const pattern = patternFromExpression(alias);
    for (const text of aliasesFromPattern(pattern)) {
      output.push(text);
    }
  }
  output.sort();

  return output.map((alias, index) => (
    <div className={styles.nested} key={index}>{alias}</div>
  ));
}

function renderLegalSpecifics(world: World, item: GenericTypedEntity) {
  const catalog = world.catalog;
  const keys = [...catalog.getSpecificsForGeneric(item.pid)];
  return (
    <div>
      <div style={{fontWeight: 'bold'}}>Specific Forms:</div>
      {keys.map(renderSpecific)}
    </div>
  );

  function renderSpecific(key: Key, index: number) {
    const defaultMark = item.defaultKey === key ? ' <== default' : '';
    const s = catalog.getSpecific(key);
    const name = s.name;
    const sku = s.sku;
    return (
      <div className={styles.nested} key={index}>
        {name} ({key}, {sku})
        {defaultMark? <span style={{paddingLeft: '1ex'}}><FaCheckCircle/></span> : null}
      </div>
    )
  }
}

function renderLegalOptions(world: World, item: GenericTypedEntity) {
  const catalog = world.catalog;
  const rules = world.ruleChecker;

  const specific = catalog.getSpecific(item.defaultKey);
  const lines: string[] = [];
  for (const childPID of rules.getValidChildren(item.defaultKey)) {
    if (catalog.hasPID(childPID)) {
      const child = catalog.getGeneric(childPID);
      lines.push(`${child.name} (${child.pid})`);
    }
  }
  lines.sort();

  return (
    <div>
      <div style={{fontWeight: 'bold'}}>
        Options for {specific.name}:
      </div>
      {lines.map(renderText)}
    </div>
  );

  function renderText(text: string, index: number) {
    return (<div className={styles.nested} key={index}>
      {text}
    </div>)
  }
}

function renderExlusionSets(world: World, item: GenericTypedEntity) {
  const catalog = world.catalog;
  const rules = world.ruleChecker;
  const sets = [...rules.getExclusionGroups(item.pid)];

  return (
    <div>
      <div style={{fontWeight: 'bold'}}>Exclusion Sets</div>
      {sets.map(renderOneExlusionSet)}
    </div>
  )

  function renderOneExlusionSet(group: Set<PID>, index: number) {
    const pids = [...group.values()];
    return (
      <div className={styles.nested} key={index}>
        <div style={{fontWeight: 'bold'}}>Set {index}</div>
        {pids.map(renderOnePID)}
      </div>
    )
  }

  function renderOnePID(pid: PID, index: number) {
    const child = catalog.getGeneric(pid);
    return (
      <div className={styles.nested} key={index}>
        {child.name} ({child.pid})
      </div>
    )
  }
}

function mapStateToProps(application: ApplicationState) {
  return {
    world: application.world,
    currentPID: application.currentPID
  };
}

export default connect(mapStateToProps)(ProductDetailControl);
