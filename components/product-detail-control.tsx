import {
  aliasesFromPattern,
  AttributeDescription,
  Key,
  PID,
  patternFromExpression,
  World,
  GenericTypedEntity,
  Dimension
} from 'prix-fixe';

import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FaCheckCircle } from 'react-icons/fa';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { AnyAction, ApplicationState, setPID } from "../actions";

import styles from './controls.module.css';

interface Props {
  world: World;
  currentPID: PID;
  selectionChanged: (pid: PID) => void;
};

class ProductDetailControl extends React.Component<Props> {
  onSelect = (pid: PID) => {
    this.props.selectionChanged(pid);
  }

  render() {
    return (
      <div style={{ width: '100%', height: '100%', overflow: 'auto'}}>
        {this.renderGeneric(this.props.world, this.props.currentPID)}
      </div>
    );
  }

  renderGeneric(world: World, pid: PID) {
    const catalog = world.catalog;
    if (!catalog.hasPID(pid)) {
      return <div>Unknown PID {pid}</div>;
    } else {
      const item = catalog.getGeneric(pid);
      return (
        <div>
          <h1>{item.name} ({item.pid})</h1>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            {renderProductAliases(item)}
            {renderProductAttributes(world, item)}
            {renderLegalSpecifics(world, item)}
            {this.renderLegalOptions(world, item)}
            {this.renderExlusionSets(world, item)}
          </div>
        </div>
      );
    }
  }

  renderLegalOptions(world: World, item: GenericTypedEntity) {
    const catalog = world.catalog;
    const rules = world.ruleChecker;
  
    const specific = catalog.getSpecific(item.defaultKey);
    const items: GenericTypedEntity[] = [];
    for (const childPID of rules.getValidChildren(item.defaultKey)) {
      if (catalog.hasPID(childPID)) {
        const child = catalog.getGeneric(childPID);
        items.push(child);
      }
    }
    items.sort((a,b) => a.name.localeCompare(b.name));

    return (
      <div className={styles.menuDetailColumn}>
        <div style={{fontWeight: 'bold', whiteSpace: 'nowrap'}}>
          Options for <span style={{backgroundColor: 'lightgray'}}>
            {specific.name} ({specific.key}, {specific.sku})
          </span>
        </div>
        {items.map(this.renderGenericLink)}
      </div>
    );  
  }

  renderExlusionSets(world: World, item: GenericTypedEntity) {
    const catalog = world.catalog;
    const rules = world.ruleChecker;
    const sets = [...rules.getExclusionGroups(item.pid)];

  
    const renderOneExlusionSet = (group: Set<PID>, index: number) => {
      const pids = [...group.values()];
      const items = pids.map(pid => catalog.getGeneric(pid));
      items.sort((a,b) => a.name.localeCompare(b.name));

      return (
        <div className={styles.nested} key={index}>
          <div style={{fontWeight: 'bold'}}>Set {index}</div>
          {items.map(this.renderGenericLink)}
        </div>
      )
    }

    return (
      <div className={styles.menuDetailColumn}>
        <div style={{fontWeight: 'bold'}}>Exclusion Sets</div>
        {sets.map(renderOneExlusionSet)}
      </div>
    )

    function renderOnePID(pid: PID, index: number) {
      const child = catalog.getGeneric(pid);
      return (
        <div className={styles.nested} key={index}>
          {child.name} ({child.pid})
        </div>
      )
    }
  }

  renderSortedGenerics(items: GenericTypedEntity[]) {
    items.sort((a,b) => a.name.localeCompare(b.name));
    return items.map(this.renderGenericLink);
  }

  renderGenericLink = (item: GenericTypedEntity) => {
    return (
      <Nav.Link
        className={styles.nested}
        key={item.pid}
        onClick={() => this.onSelect(item.pid)}
      >
        {item.name} ({item.pid})
      </Nav.Link>
    );
  }
}

function renderProductAttributes(
  world: World,
  item: GenericTypedEntity
) {
  const tensor = world.attributeInfo.getTensor(item.tensor);
  return (
    <div className={styles.menuDetailColumn}>
      <div style={{fontWeight: 'bold'}}>Attributes</div>
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
        <div style={{fontWeight: 'bold'}}>{attribute.name}</div>
        { renderAliases(attribute.aliases) }
      </div>
    )
  }
}

function renderProductAliases(item: GenericTypedEntity) {
  return (
    <div className={styles.menuDetailColumn}>
      <div style={{fontWeight: 'bold'}}>Aliases</div>
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
    <div className={styles.menuDetailColumn}>
      <div style={{fontWeight: 'bold'}}>Specific Forms</div>
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
        {defaultMark? <span style={{paddingLeft: '1ex'}}>
          <FaCheckCircle title="default form"/>
        </span> : null}
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

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return {
    selectionChanged: (pid: PID) => {
      dispatch(setPID(pid));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailControl);
