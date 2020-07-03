import { GenericTypedEntity, MENUITEM, PID } from 'prix-fixe';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { AnyAction, ApplicationState, setPID } from "../actions";

import styles from './controls.module.css';

interface Props {
  application: ApplicationState;
  // selectionChanged: (pid: PID) => void;
  selected? : string;
};

class ProductListControl extends React.Component<Props> {
  // onSelect = (eventKey: string) => {
  //   this.props.selectionChanged(Number(eventKey));
  // }

  render() {
    return (
      <div>
        { this.renderCatalog()}
      </div>
    );
  }

  renderCatalog() {
    const catalog = this.props.application.world!.catalog;
    const currentPID = this.props.application.currentPID;
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
    options.sort((a,b) => (a.name.localeCompare(b.name)));

    return (
      <div style={{ width: '100%', height: '100%', overflow: 'auto'}}>
        <Nav
          className="flex-column"
          // activeKey={currentPID}
          // onSelect={this.onSelect}
          variant="pills"
        >
          <div style={{fontWeight: 'bold'}}>Products:</div>
          {products.map(renderItem)}
          <div style={{fontWeight: 'bold'}}>Options:</div>
          {options.map(renderItem)}
        </Nav>
      </div>
    );

    function renderItem(item: GenericTypedEntity) {
      return (
        <Nav.Item key={item.pid} style={{paddingTop: '0', paddingBottom: '0'}}>
          <Nav.Link style={{whiteSpace: 'nowrap', paddingTop: '0', paddingBottom: '0'}} eventKey={item.pid}>
            {item.name} ({item.pid})
          </Nav.Link>
        </Nav.Item>
      );
    }
  }
}

function mapStateToProps(application: ApplicationState) {
  return { application };
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return {
    selectionChanged: (pid: PID) => {
      dispatch(setPID(pid));
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductListControl);
