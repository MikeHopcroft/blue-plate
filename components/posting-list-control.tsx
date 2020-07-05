import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux'
import { TokenSpec } from 'short-order';
import { InvertedIndex, PostingListForHash, Token, TokenizerAlias } from 'token-flow';

import { ApplicationState } from "../actions";

import { formatToken } from './edge-controls';
import { BackButton, createMasterDetail } from './master-detail-control';

import styles from './controls.module.css';

class Master extends React.Component<{
  invertedIndex: InvertedIndex,
  selected?: string
}> {
  render() {
    console.log('Master render');
    console.log(this.props);
    if (!this.props.invertedIndex) {
      return null;
    } else {
      return this.props.invertedIndex.terms.map((posting, index) => {
        return (
          <Nav.Item key={posting.hash} style={{paddingTop: '0', paddingBottom: '0'}}>
            <Nav.Link
              style={{whiteSpace: 'nowrap', paddingTop: '0', paddingBottom: '0'}}
              eventKey={posting.hash}
            >
              {posting.term} ({posting.tokenToAliases.size})
            </Nav.Link>
          </Nav.Item>
        );
      });
    }
  }

  static connect() {
    return connect((application: ApplicationState) => ({
      invertedIndex: application.bluePlateWorld.postings 
    }))(Master);
  }
}

class Detail extends React.Component<{
  invertedIndex: InvertedIndex,
  selected?: string
}> {
  render() {
    if (!this.props.invertedIndex) {
      return null;
    }

    const hash = Number(this.props.selected);
    const posting = this.props.invertedIndex.terms.find(
      x => x.hash === hash
    );

    if (!posting) {
      return null;
    }

    const typeToTokens = new Map<Symbol, Token[]>();
    for (const token of posting.tokenToAliases.keys()) {
      const t = typeToTokens.get(token.type);
      if (t) {
        t.push(token);
      } else {
        typeToTokens.set(token.type, [token]);
      }
    }

    return (
      <div>
        <h1>{posting.term}</h1>
        <div style={{display: 'flex', flexDirection: 'row'}}>
        {
          [...typeToTokens.entries()].map((entry, index) => {
            const symbol = entry[0].toString();
            const name = `${symbol.slice(7, symbol.length - 1)}`;
            return this.renderTokenTypes(posting, entry[0], entry[1]);
          })
        }
        </div>
        {
          // [...posting.tokenToAliases.entries()].map((entry, index) => {
          //   const token = formatToken(entry[0], 0);
          //   return (
          //     <Nav.Item key={index} style={{paddingTop: '0', paddingBottom: '0'}}>
          //       <Nav.Link
          //         style={{whiteSpace: 'nowrap', paddingTop: '0', paddingBottom: '0'}}
          //         eventKey={hash + '/' + this.props.invertedIndex.tokenToId.get(entry[0])}
          //       >
          //         {token.type} {token.name}
          //       </Nav.Link>
          //     </Nav.Item>
          //   );
          // })
        }
      </div>
    );
  }

  renderTokenTypes(posting: PostingListForHash, type: Symbol, tokens: Token[]) {
    const symbol = type.toString();
    const name = `${symbol.slice(7, symbol.length - 1)}`;
    return (
      <div style={{borderRight: 'solid black 1px', paddingRight: '1em', marginRight: '1em'}}>
        <b>{name}</b>
        { tokens.map( token => {
          const formatted = formatToken(token, 0);
          const aliases = posting.tokenToAliases.get(token);
          return (
            <div>
              <div style={{fontWeight: 'bold', paddingLeft: '1em'}}>{formatted.name}</div>
              { aliases.map(a => <div style={{paddingLeft: '2em', whiteSpace: 'nowrap'}}>{a.text}</div>) }
            </div>
          )
        })}
      </div>
    )
  }

  static connect() {
    return connect((application: ApplicationState) => ({
      invertedIndex: application.bluePlateWorld.postings 
    }))(Detail);
  }
}

class Drilldown extends React.Component<{
  invertedIndex: InvertedIndex,
  selected: string
}> {
  render() {
    if (!this.props.selected) {
      return null;
    }

    const parts = this.props.selected.split('/');
    const hash = Number(parts[0]);
    const tokenId = Number(parts[1]);
    const token = this.props.invertedIndex.idToToken.get(tokenId);
    const posting = this.props.invertedIndex.terms.find(
      x => x.hash === hash
    );
    const aliases = posting.tokenToAliases.get(token);

    return (
      <div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <BackButton/>
          <h1 style={{flexGrow: 1}}>Detail {this.props.selected}</h1>
        </div>
        <b>{this.props.selected}</b>
        {aliases.map((alias, index) => (
          <div className={styles.nested} key={index}>{alias.text}</div>
        ))}
      </div>
    );
  }

  static connect() {
    return connect((application: ApplicationState) => ({
      invertedIndex: application.bluePlateWorld.postings 
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
  Drilldown.connect()
);

export default MasterDetail;