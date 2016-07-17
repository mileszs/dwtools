import React, { Component, PropTypes } from 'react'
import { Well } from 'react-bootstrap'
import classNames from 'classnames'
import _ from 'lodash'

export default class Help extends Component {
  render() {
    return (
      <Well>{this.props.children}</Well>
    )
  }
}
