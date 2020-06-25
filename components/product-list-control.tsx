import { ICatalog, GenericTypedEntity, MENUITEM, PID } from 'prix-fixe';
import React from 'react';
import { connect } from 'react-redux'

import { ApplicationState } from "../actions";

import styles from './controls.module.css';

interface Props {
  application: ApplicationState;
};

class ProductListControl extends React.Component<Props> {
  render() {
    const catalog = this.props.application.world!.catalog;
    const currentPID = this.props.application.currentPID;
    return (
      <div>
        { printCatalog(catalog, currentPID)}
      </div>
    );
  }
}

function printCatalog(catalog: ICatalog, currentPID: PID) {
  const products: GenericTypedEntity[] = [];
  const options: GenericTypedEntity[] = [];
  for (const item of catalog.genericEntities()) {
    if (item.kind === MENUITEM) {
      products.push(item);
    } else {
      options.push(item);
    }
  }

  products.sort((a,b) => (a.name.localeCompare(b.name)));
  // options.sort((a,b) => (a.name.localeCompare(b.name)));

  return (
    <div>
      <div style={{fontWeight: 'bold'}}>Products:</div>
      {products.map(renderItem)}
      {/* <div style={{fontWeight: 'bold'}}>Options:</div>
      {options.map(renderItem)} */}
    </div>
  );

  function renderItem(item: GenericTypedEntity) {
    // TODO: do this with styling or correct boostrap component
    // that already handles selection.
    if (item.pid === currentPID) {
      return (
        <div className={styles.nested + ' ' + styles.selected} key={item.pid}>
          {item.name} ({item.pid})
        </div>
      );
    } else {
      return (
        <div className={styles.nested} key={item.pid}>
          {item.name} ({item.pid})
        </div>
      );
    }
  }
}

function mapStateToProps(application: ApplicationState) {
  return { application };
}

export default connect(mapStateToProps)(ProductListControl);
