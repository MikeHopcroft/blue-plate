import { ICatalog } from 'prix-fixe';
import React from 'react';
import { connect } from 'react-redux'

import { ApplicationState } from "../actions";

interface Props {
  application: ApplicationState;
};

class MenuControl extends React.Component<Props> {
  render() {
    return (
      <div>
        {printCatalog(this.props.application.world!.catalog)}
      </div>
    );
  }
}

function printCatalog(catalog: ICatalog) {
  return [...catalog.specificEntities()].map(item => (
    <div key={item.sku.toString()}>
      {`${item.name} (${item.sku})`}
    </div>
  ));
}

function mapStateToProps(application: ApplicationState) {
  return { application };
}

export default connect(mapStateToProps)(MenuControl);
