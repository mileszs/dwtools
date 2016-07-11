import React, { Component, PropTypes } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Dungeon World Tools</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to={`/monster-finder`}>
                <NavItem>Monster Finder</NavItem>
              </LinkContainer>
              <LinkContainer to={`/monster-maker`}>
                <NavItem>Monster Maker</NavItem>
              </LinkContainer>
              <LinkContainer to={`/move-finder`}>
                <NavItem>Move Finder</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container" id="main">
          {this.props.children}
        </div>
      </div>
    )
  }
}
