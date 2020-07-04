import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FaArrowCircleLeft } from 'react-icons/fa';

interface State {
  detailKey?: string;
  drilldownKey?: string;
}

export function createMasterDetail(
  Master: React.ComponentType<{ selected?: string }>,
  Detail: React.ComponentType<{ isDrilldown?: boolean, selected?: string }>,
  Drilldown: React.ComponentType<{ isDrilldown?: boolean, selected: string }>
) {
  return class MasterDetailControl extends React.Component<{}, State> {
    constructor(props) {
      super(props);
      this.onDetail = this.onDetail.bind(this);
      this.onDrilldown = this.onDrilldown.bind(this);
      this.state = {
      }
    }

    onDetail = (detailKey: string | undefined) => {
      console.log(`onDetail ${detailKey}`);
      this.setState({ detailKey, drilldownKey: undefined });
    }

    onDrilldown = (drilldownKey: string | undefined) => {
      console.log(`onDrilldown ${drilldownKey}`);
      this.setState({ drilldownKey: drilldownKey.length === 0 ? undefined: drilldownKey });
    }

    render() {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: '100%'
        }}>
          <div style={{ flexShrink: 0, overflow: 'auto'}}>
            <Nav
              className="flex-column"
              variant="pills"
              activeKey = { this.state.detailKey }
              onSelect = { this.onDetail }
              style = {{
                backgroundColor: 'white',
              }}
            >
              <Master selected={this.state.detailKey} />
            </Nav>
          </div>
          <div style={{flexGrow: 1, overflow: 'auto'}}>
            <Nav onSelect={this.onDrilldown} style={{width: '100%', height: '100%'}}>
              {
                (this.state.drilldownKey === undefined) ?
                  <Detail isDrilldown={false} selected={this.state.detailKey} /> :
                  <Drilldown isDrilldown={true} selected={this.state.drilldownKey} />
              }
            </Nav>
          </div>
        </div>
      );
    }
  }
}

export function BackButton() {
  return (
    <Nav.Link eventKey={''}>
      <FaArrowCircleLeft style={{color: '#007bff', width: "30px", height: "30px"}}/>
    </Nav.Link>
  );
}

function Master1(props: {selected?: string }) {
  return (
    <div>
      <h1>Master {props.selected}</h1>
      <Nav.Item>
        <Nav.Link eventKey='one'>
          one
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='two'>
          two
        </Nav.Link>
      </Nav.Item>
    </div>
  )
}

function Detail1(props: {selected?: string }) {
  const linkA = props.selected + '/a';
  const linkB = props.selected + '/b';
  return (
    <div>
      <h1>Detail {props.selected}</h1>
      <Nav.Link eventKey={linkA}>
        {linkA}
      </Nav.Link>
      <Nav.Link eventKey={linkB}>
        {linkB}
      </Nav.Link>
    </div>
  )
}

function Drilldown1(props: {selected?: string }) {
  return (
    <div>
      <h1>Drilldown {props.selected}</h1>
      <BackButton/>
    </div>
  )
}

export const MasterDetail = createMasterDetail(Master1, Detail1, Drilldown1);
