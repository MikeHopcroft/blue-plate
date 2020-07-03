import { aliasesFromPattern, patternFromExpression } from 'prix-fixe';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux'
import { LexiconSpec, TokenSpec } from 'short-order';

import { ApplicationState } from "../actions";
import { BackButton, createMasterDetail } from './master-detail-control';
import styles from './controls.module.css';

class Master extends React.Component<{
  lexiconSpec?: LexiconSpec,
  selected?: string
}> {
  render() {
    console.log('Master render');
    console.log(this.props);
    if (!this.props.lexiconSpec) {
      return null;
    } else {
      return this.props.lexiconSpec.lexicon.map((spec, index) => {
        const name = formatTokenName(spec);
        return (
          <Nav.Item key={name} style={{paddingTop: '0', paddingBottom: '0'}}>
            <Nav.Link
              style={{whiteSpace: 'nowrap', paddingTop: '0', paddingBottom: '0'}}
              eventKey={name}
            >
              {name}
            </Nav.Link>
          </Nav.Item>
        );
      });
    }
  }

  static connect() {
    return connect((application: ApplicationState) => ({
      lexiconSpec: application.lexiconSpec 
    }))(Master);
  }
}

class Detail extends React.Component<{
  lexiconSpec?: LexiconSpec,
  selected?: string
}> {
  render() {
    console.log('Detail render');
    console.log(this.props);
    if (!this.props.lexiconSpec) {
      return null;
    } else {
      const tokenSpec = this.props.lexiconSpec.lexicon.find(
        x => formatTokenName(x) === this.props.selected
      );

      if (tokenSpec) {
        const name = formatTokenName(tokenSpec);
        return (
          <div>
            <h1>{name}</h1>
            { tokenSpec.aliases.map((alias, index) =>
              <Nav.Item key={index} style={{paddingTop: '0', paddingBottom: '0'}}>
                <Nav.Link
                  style={{whiteSpace: 'nowrap', paddingTop: '0', paddingBottom: '0'}}
                  eventKey={alias}
                >
                  {alias}
                </Nav.Link>
              </Nav.Item>
            )}
          </div>
        );
      } else {
        return null;
      }
    }
  }

  static connect() {
    return connect((application: ApplicationState) => ({
      lexiconSpec: application.lexiconSpec 
    }))(Detail);
  }
}

class Drilldown extends React.Component<{
  selected: string
}> {
  render() {
    const pattern = patternFromExpression(this.props.selected);
    const aliases = [...aliasesFromPattern(pattern)];
    console.log(pattern);
    console.log(aliases);
    return (
      <div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <BackButton/>
          <h1 style={{flexGrow: 1}}>{aliases.length} variant{aliases.length===1?'':'s'}</h1>
        </div>
        <b>{this.props.selected}</b>
        {aliases.map((alias, index) => (
          <div className={styles.nested} key={index}>{alias}</div>
        ))}
      </div>
    );
  }
}

function formatTokenName(spec: TokenSpec) {
  return spec.name === 'QUANTITY' ?
    'QUANTITY(' + spec.value + ')' :
    spec.name;
}

const MasterDetail = createMasterDetail(
  Master.connect(),
  Detail.connect(),
  Drilldown
);

export default MasterDetail;
