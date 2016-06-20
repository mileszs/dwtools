import React, { Component, PropTypes } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div className="page-container">
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Dungeon World Tools</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem href="#">Link</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem href="https://github.com/mileszs/dw-move-finder">On GitHub</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.props.children}
      </div>
    )
  }
}
