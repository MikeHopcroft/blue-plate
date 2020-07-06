import { cartFromlogicalCart, ICatalog, Measures } from 'prix-fixe';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FaCheck, FaKeyboard, FaProjectDiagram,  FaTimes } from 'react-icons/fa';
import { connect } from 'react-redux'

import { ApplicationState } from '../actions';
import { AllTestResults, TestResult } from '../logic';

import GraphControl from './graph-control';
import { renderItemList } from './item-list';
import { BackButton, createMasterDetail } from './master-detail-control';

import styles from './controls.module.css';

class Master extends React.Component<{
  testResults: AllTestResults,
  selected?: string
}> {
  render() {
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
              className = {test.passed?'green':'red'}
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
      testResults: application.bluePlateWorld.testResults,
    }))(Master);
  }
}

class Detail extends React.Component<{
  catalog: ICatalog,
  testResults: AllTestResults,
  selected?: string
}> {
  render() {
    if (this.props.selected === undefined) {
      return null;
    }
    const test = this.props.testResults.get(Number(this.props.selected));
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%'
      }}>
        <h1>Test {this.props.selected}</h1>
        <div style={{flexGrow: 1, overflow: 'auto'}}>
          <div>{ test.expected.comment }</div>
          <div><b>Suites:</b> {test.expected.suites}</div>
          { this.renderSteps(test) }
        </div>
      </div>
    )
  }

  renderSteps(test: TestResult) {
    const steps = [];
    for (let i = 0; i < test.expected.steps.length; ++i) {
      steps.push(this.renderOneStep(test, i));
    }
    return steps;
  }

  renderOneStep(test: TestResult, stepIndex: number) {
    const step = test.scored.steps[stepIndex];
    const expected = cartFromlogicalCart(
      test.expected.steps[stepIndex].cart,
      this.props.catalog
    );
    const observed = cartFromlogicalCart(
      step.cart,
      this.props.catalog
    );
    const measures = step.measures;

    return (
      <div key={stepIndex}>
        <div style={{marginTop: '2ex'}}>
          <b>Step {stepIndex}:</b> &nbsp;
          {step.measures.repairs.cost > 0 ? 
            <span style={{backgroundColor: 'red', color: 'yellow'}}>Failed</span> : 
            <span style={{backgroundColor: 'forestgreen', color: 'yellow'}}>Passed</span>}
        </div>
        { step.turns.map((x, turnIndex) => 
          <div key={turnIndex}>
            <b>{x.speaker}:</b> <i>"{x.transcription}"</i>
            {/* <FaProjectDiagram style={{color: 'blue', marginLeft: '4px'}}/> */}
            { this.renderDrilldownButton(stepIndex, turnIndex) }
          </div>
        )}
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{backgroundColor: 'lightblue', marginRight: '1em'}}>
            <b>Expected</b>
            { renderItemList(
                this.props.catalog,
                expected.items
              )
            }
          </div>
          <div style={{backgroundColor: 'lightblue', marginRight: '1em'}}>
            <b>Observed</b>
            { renderItemList(
                this.props.catalog,
                observed.items
              )
            }
          </div>
          { this.renderRepairs(measures)}
        </div>  
      </div>
    )
  }

  renderDrilldownButton(id: number, step: number) {
    return (
      <Nav.Item style={{display: 'inline', paddingTop: '0', paddingBottom: '0'}}>
        <Nav.Link
          style={{display: 'inline', whiteSpace: 'nowrap', padding: '0px 4px'}}
          eventKey={this.props.selected + '/' + id + '/' + step}
        >
          <FaProjectDiagram style={{color: 'blue', marginLeft: '4px'}}/>
        </Nav.Link>
      </Nav.Item>
    );
  }

  renderRepairs(measures: Measures) {
    if (measures.repairs.cost === 0) {
      return null;
    } else {
      return (
        <div style={{backgroundColor: 'lightblue'}}>
          <b>Repairs</b>
          { measures.repairs.steps.map((x,i) => 
            <div key={i} style={{whiteSpace: 'nowrap'}}>{x}</div>
          )}
        </div>
      );
    }
  }

  static connect() {
    return connect((application: ApplicationState) => ({
      catalog: application.bluePlateWorld.prixFixeWorld.catalog,
      testResults: application.bluePlateWorld.testResults,
    }))(Detail);
  }
}

class Drilldown extends React.Component<{
  selected: string,
  testResults: AllTestResults,
}> {
  render() {
    if (!this.props.selected) {
      return null;
    }

    const parts = this.props.selected.split('/');
    const id = Number(parts[0]);
    const stepIndex = Number(parts[1]);
    const turnIndex = Number(parts[2]);
    console.log(this.props.testResults);
    const test = this.props.testResults.get(id);
    const text = test.expected.steps[stepIndex].turns[turnIndex].transcription;

    return (
      <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%'}}>
        <div>
          <BackButton/>
        </div>
        <div style={{flexGrow: 1, overflow: 'auto', width: '100%', height: '100%' }}>
          <GraphControl transcription={text}/>
        </div>
      </div>
    );
  }

  static connect() {
    return connect((application: ApplicationState) => ({
      testResults: application.bluePlateWorld.testResults,
    }))(Drilldown);
  }
}

const MasterDetail = createMasterDetail(
  Master.connect(),
  Detail.connect(),
  Drilldown.connect()
);

export default MasterDetail;
