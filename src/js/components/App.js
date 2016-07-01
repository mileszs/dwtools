import React, { Component, PropTypes } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    console.log('props in app.js', this.props)
    return (
      <div className="page-container">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Dungeon World Tools</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
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
          <Nav pullRight>
            <NavItem href="https://github.com/mileszs/dw-move-finder">On GitHub</NavItem>
          </Nav>
        </Navbar>
        {this.props.children}
      </div>
    )
  }
}
