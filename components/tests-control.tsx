import { enumerateTestCases, LogicalScoredSuite, LogicalValidationSuite, TextTurn } from 'prix-fixe';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { connect } from 'react-redux'

import { ApplicationState } from "../actions";
import { createMasterDetail } from './master-detail-control';

import styles from './controls.module.css';

class Master extends React.Component<{
  expected?: LogicalValidationSuite<TextTurn>,
  scored: LogicalScoredSuite<TextTurn>
  selected?: string
}> {
  render() {
    console.log('TestsControl Master render');
    console.log(this.props);
    if (!this.props.expected || !this.props.scored) {
      return null;
    } else {
      const tests = [...enumerateTestCases(this.props.scored)];
      return tests.map((test, index) => {
        const name = test.id.toString();
        const repairs = test.steps.reduce((p, c) => p + c.measures.repairs!.cost, 0);
        const icon = repairs > 0 ? <FaTimes style={{color: 'red'}}/> : <FaCheck style={{color: 'green'}}/>
        return (
          <Nav.Item key={name} style={{paddingTop: '0', paddingBottom: '0'}}>
            <Nav.Link
              style={{whiteSpace: 'nowrap', paddingTop: '0', paddingBottom: '0'}}
              eventKey={name}
            >
              {icon} {name}
            </Nav.Link>
          </Nav.Item>
        );
      });
    }
  }

  static connect() {
    return connect((application: ApplicationState) => ({
      expected: application.expected,
      scored: application.scored,
    }))(Master);
  }
}

class Detail extends React.Component<{
  expected?: LogicalValidationSuite<TextTurn>,
  scored: LogicalScoredSuite<TextTurn>
  selected?: string
}> {
  render() {
    console.log('Detail render');
    console.log(this.props);
    return (
      <div>
        <h1>Detail {this.props.selected}</h1>
        Test commments, pass/fail summary here
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{width: '200px', height: '200px', backgroundColor: 'red'}}>Expected</div>
          <div style={{width: '200px', height: '200px', backgroundColor: 'green'}}>Observed</div>
          <div style={{width: '200px', height: '200px', backgroundColor: 'blue'}}>Repairs</div>
        </div>
      </div>
    )
  }

  static connect() {
    return connect((application: ApplicationState) => ({
      expected: application.expected,
      scored: application.scored,
    }))(Detail);
  }
}

class Drilldown extends React.Component<{
  selected: string
}> {
  render() {
    console.log('Drilldown render');
    return <h1>Drilldown</h1>
  }
}

const MasterDetail = createMasterDetail(
  Master.connect(),
  Detail.connect(),
  Drilldown
);

export default MasterDetail;
