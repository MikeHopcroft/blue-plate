import { ICatalog } from 'prix-fixe';
import React from 'react';
import { connect } from 'react-redux'

import { ApplicationState } from "../actions";

import ProductDetailControl from './product-detail-control';
import ProductListControl from './product-list-control';

interface Props {
  application: ApplicationState;
};

class MenuControl extends React.Component<Props> {
  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'row'
      }}>
        <ProductListControl/>
        <ProductDetailControl/>
      </div>
    );
  }
}

function mapStateToProps(application: ApplicationState) {
  return { application };
}

export default connect(mapStateToProps)(MenuControl);
