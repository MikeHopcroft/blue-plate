import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { connect } from 'react-redux'

import { ApplicationState } from '../actions';
import { AllTestResults } from '../logic';

import { createMasterDetail } from './master-detail-control';

import styles from './controls.module.css';

class Master extends React.Component<{
  testResults: AllTestResults,
  selected?: string
}> {
  render() {
    console.log('TestsControl Master render');
    console.log(this.props);
    if (!this.props.testResults) {
      return null;
    } else {
      const tests = [...this.props.testResults.values()];
      return tests.map((test, index) => {
        const name = test.id.toString();
        const repairs = test.repairs;
        const icon = test.passed ? 
          <FaCheck style={{color: 'green'}}/> : 
          <FaTimes style={{color: 'red'}}/>;
        return (
          <Nav.Item key={name} style={{paddingTop: '0', paddingBottom: '0'}}>
            <Nav.Link
              style={{whiteSpace: 'nowrap', paddingTop: '0', paddingBottom: '0'}}
              eventKey={name}
            >
              {icon} {name} (repairs={repairs})
            </Nav.Link>
          </Nav.Item>
        );
      });
    }
  }

  static connect() {
    return connect((application: ApplicationState) => ({
      testResults: application.testResults,
    }))(Master);
  }
}

class Detail extends React.Component<{
  testResults: AllTestResults,
  selected?: string
}> {
  render() {
    if (this.props.selected === undefined) {
      return null;
    }
    console.log('Detail render');
    console.log(this.props);
    const test = this.props.testResults.get(Number(this.props.selected));
    console.log(test);
    return (
      <div>
        <h1>Detail {this.props.selected}</h1>
        Test commments, pass/fail summary here
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{width: '200px', height: '200px', backgroundColor: 'red'}}>Expected</div>
          <div style={{width: '200px', height: '200px', backgroundColor: 'green'}}>Observed</div>
          <div style={{width: '200px', height: '200px', backgroundColor: 'blue'}}>Repairs: {test.repairs}</div>
        </div>
      </div>
    )
  }

  static connect() {
    return connect((application: ApplicationState) => ({
      testResults: application.testResults,
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
