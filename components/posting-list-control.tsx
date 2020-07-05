import { aliasesFromPattern, patternFromExpression } from 'prix-fixe';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux'
import { LexiconSpec, TokenSpec } from 'short-order';
import { PostingList } from 'token-flow';

import { ApplicationState } from "../actions";

import { formatToken } from './edge-controls';
import { BackButton, createMasterDetail } from './master-detail-control';

import styles from './controls.module.css';

class Master extends React.Component<{
  postings: PostingList,
  selected?: string
}> {
  render() {
    console.log('Master render');
    console.log(this.props);
    if (!this.props.postings) {
      return null;
    } else {
      return this.props.postings.map((posting, index) => {
        return (
          <Nav.Item key={posting.hash} style={{paddingTop: '0', paddingBottom: '0'}}>
            <Nav.Link
              style={{whiteSpace: 'nowrap', paddingTop: '0', paddingBottom: '0'}}
              eventKey={posting.hash}
            >
              {posting.term} ({posting.postings.size})
            </Nav.Link>
          </Nav.Item>
        );
      });
    }
  }

  static connect() {
    return connect((application: ApplicationState) => ({
      postings: application.bluePlateWorld.postings 
    }))(Master);
  }
}

class Detail extends React.Component<{
  postings: PostingList,
  selected?: string
}> {
  render() {
    if (!this.props.postings) {
      return null;
    } else {
      const hash = Number(this.props.selected);
      const posting = this.props.postings.find(
        x => x.hash === hash
      );

      if (posting) {
        return (
          <div>
            <h1>{posting.term}</h1>
            { [...posting.postings.entries()].map((entry, index) => {
              const token = formatToken(entry[0], 0);
              return (
                <Nav.Item key={index} style={{paddingTop: '0', paddingBottom: '0'}}>
                  <Nav.Link
                    style={{whiteSpace: 'nowrap', paddingTop: '0', paddingBottom: '0'}}
                    eventKey={hash + '/' + index}
                  >
                    {token.type} {token.name}
                  </Nav.Link>
              </Nav.Item>

              );
            })}
          </div>
        );
      } else {
        return null;
      }
    }
  }

  static connect() {
    return connect((application: ApplicationState) => ({
      postings: application.bluePlateWorld.postings 
    }))(Detail);
  }
}

class Drilldown extends React.Component<{
  postings: PostingList,
  selected: string
}> {
  render() {
    if (!this.props.selected) {
      return null;
    }

    const parts = this.props.selected.split('/');
    const hash = Number(parts[0]);
    const tokenIndex = Number(parts[1]);
    // const posting = this.props.postings.find(
    //   x => x.hash === hash
    // );
    // const aliases = posting.postings[tokenIndex];

    // const turnIndex = Number(parts[2]);
    // console.log(this.props.testResults);


    // const pattern = patternFromExpression(this.props.selected);
    // const aliases = [...aliasesFromPattern(pattern)];
    // console.log(pattern);
    // console.log(aliases);
    return (
      <div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <BackButton/>
    <h1 style={{flexGrow: 1}}>Detail {this.props.selected}</h1>
        </div>
        <b>{this.props.selected}</b>
        {/* {aliases.map((alias, index) => (
          <div className={styles.nested} key={index}>{alias}</div>
        ))} */}
      </div>
    );
  }

  static connect() {
    return connect((application: ApplicationState) => ({
      postings: application.bluePlateWorld.postings 
    }))(Drilldown);
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
