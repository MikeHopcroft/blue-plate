import classNames from 'classnames'
import Link from 'next/link';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { withRouter } from "react-router";
// import { ServerRouter as Router, Route, Switch } from "react-router-dom";

import { applyMiddleware, createStore } from 'redux'
// import createSagaMiddleware from 'redux-saga'

// import './stylesheets/index.css';

import { initialState } from '../actions/application-state';
import { ApplicationStateReducer } from '../actions/reducers'
// import DragDropRootControl from './controls/drag-drop-root-control';
import FrameControl from '../components/frame-control';
// import * as serviceWorker from './serviceWorker';

// const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  ApplicationStateReducer,
  initialState(),
  // applyMiddleware(sagaMiddleware)
);

// const server = 1;
// sagaMiddleware.run(processDMXActions, server)

// const Header = props => {
//   const { location } = props;
//   return (
//     <Navbar bg="light" variant="light">
//       <Nav activeKey={location.pathname}>
//         <Nav.Link href="/">Home</Nav.Link>
//         <Nav.Link href="/one">One</Nav.Link>
//         <Nav.Link href="/two">Two</Nav.Link>
//       </Nav>
//     </Navbar>
//   );
// };
// const HeaderWithRouter = withRouter(Header);
export const NavLink = (props) => {

  let className = classNames({
    "nav-link": true,
    "is-active": props.pathname
  })
  return <Link href={props.path}><a className={className}>{props.label}</a></Link>

}

// //https://github.com/react-bootstrap/react-bootstrap/issues/4131
// const Header = ({ router: { pathname } }) => (
//   <header>
//     <div id="wrapper-navbar">
//         <Navbar bg="light" expand="lg">
//         <Container >
//           <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ml-auto">
//               <NavLink path="/" label="Home" pathname/>
//               <NavLink path="/about" label="About Us" pathname/>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//         </Navbar>    
//     </div>
//   </header>
// )

// // export default withRouter(Header)
// const HeaderWithRouter = withRouter(Header);

// export default function Home() {
//   return (
//     <Provider store={store}>
//         <HeaderWithRouter/>
//         <FrameControl/>
//     </Provider>
//   );
// }

export default function Home() {
  return (
    <Provider store={store}>
        <Navbar bg="dark" variant="dark" expand="sm">
          <Navbar.Brand href="#home">short-order</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"  >
              <Link href="/" passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link href="#menu" passHref>
                <Nav.Link>Menu</Nav.Link>
              </Link>
              <Link href="#graph" passHref>
                <Nav.Link>graph</Nav.Link>
              </Link>


              {/* <Link href="#home">Intro</Link>
              <Link href="#menu">Menu</Link>
              <Link href="#graph">Graph</Link> */}

              {/* <Nav.Link href="#home">Intro</Nav.Link>
              <Nav.Link href="#menu">Menu</Nav.Link>
              <Nav.Link href="#graph">Graph</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <FrameControl/>

    </Provider>
  );
}

// ReactDOM.render(
//   <Provider store={store}>
//     <DragDropRootControl>
//       <h3>
//         PI DMX Controller 456
//       </h3>
//       <FrameControl />
//     </DragDropRootControl>
//   </Provider>,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
