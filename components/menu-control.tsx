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
      <div className='foo' style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%'
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
