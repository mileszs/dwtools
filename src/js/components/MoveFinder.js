import React, { Component, PropTypes } from 'react'
import { Button, Glyphicon } from 'react-bootstrap'
import classNames from 'classnames'
import _ from 'lodash'

import Help from './Help'

export default class MoveFinder extends Component {
  render() {
    let items = []
    let itemsHTML = ''
    if (_.isArray(this.props.moves)) {
      items = this.props.moves.map((text) => {
        return <MoveItem move={text} yourMove={this.props.yourMove} key={text} />
      })
      itemsHTML = <MovesList items={items} key='moveslist'/>
    } else {
      items = _.keys(this.props.moves).map((text) => {
        return <CategoryLink key={text} choose={this.props.actions.chooseMove} text={text} />
      })
      itemsHTML = <CategoryList items={items} />
    }
    return (
      <div className='row'>
        <div className='col-md-6'>
          {itemsHTML}
        </div>
        <div className='col-md-6'>
          <YourMove resetMove={this.props.actions.resetMove} move={this.props.yourMove} key='yourmove' />
          <Help>
            <p>Based on the series of articles at RPG Alchemy, Hard Moves & GM Intrusions, here is a tool to help you quickly find a hard move in the heat of the moment for your game.</p>

            <p>How does it work?</p>

            <p>Simply ask yourself 'What best describes the current situation?' Click the button with the answer. Do that again until you're presented with a hard move to use.</p>

            <p>A list of possible moves for your situation is included, in case the bolded one plucked from that list for you isn't to your liking.</p>
          </Help>
        </div>
      </div>
    );
  }
}

class CategoryList extends Component {
  render() {
    return (
      <div className='list-group'>
        {this.props.items}
      </div>
    )
  }
}

class CategoryLink extends Component {
  constructor(props) {
    super(props)
    this.handleCategoryClick = this.handleCategoryClick.bind(this)
  }

  render() {
    return (
      <a className='list-group-item' key={this.props.text} onClick={_.partial(this.handleCategoryClick, this.props.text)} href='#'>{this.props.text}</a>
    )
  }

  handleCategoryClick(item, e) {
    e.preventDefault()
    this.props.choose(item)
  }
}

class YourMove extends Component {
  constructor(props) {
    super(props)
    this.handleResetClick = this.handleResetClick.bind(this)
  }

  render() {
    if (_.isEmpty(this.props.move)) {
      return <div />
    } else {
      return (
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3>Your Move</h3>
          </div>
          <div className="panel-body">
            <p>{this.props.move}</p>
          </div>
          <div className="panel-footer">
            <a href="#" onClick={this.handleResetClick}><i className='fa fa-refresh' /> Reset</a>
          </div>
        </div>
      )
    }
  }

  handleResetClick(e) {
    e.preventDefault()
    this.props.resetMove()
  }
}

class MovesList extends Component {
  render() {
    return (
      <ul className='list-group'>
        {this.props.items}
      </ul>
    )
  }
}

class MoveItem extends Component {
  classnames() {
    return classNames(
      'list-group-item',
      { 'active': this.props.move === this.props.yourMove }
    )
  }

  render() {
    return (
      <li className={this.classnames()}>{this.props.move}</li>
    )
  }
}
