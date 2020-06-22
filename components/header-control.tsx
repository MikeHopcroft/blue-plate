import Link from 'next/link';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default class HeaderControl extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="sm">
        <Navbar.Brand href="#home">short-order</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"  >
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/menu" passHref>
              <Nav.Link>Menu</Nav.Link>
            </Link>
            <Link href="#graph" passHref>
              <Nav.Link>Graph</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
