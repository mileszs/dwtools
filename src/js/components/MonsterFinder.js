import React, { Component, PropTypes } from 'react'
import { Panel } from 'react-bootstrap'
import classNames from 'classnames'
import _ from 'lodash'

import Help from './Help'

export default class MonsterFinder extends Component {
  constructor(props) {
    super(props)
    this.handleCategoryClick = this.handleCategoryClick.bind(this)
  }

  render() {
    let items = this.props.categories.map((item) => {
      const active = this.props.chosenCategory === item ? 'active' : ''
      const itemClass = classNames({
        'list-group-item': true,
        'active': this.props.chosenCategory === item
      })
      return <a key={item} className={itemClass} onClick={_.partial(this.handleCategoryClick, item)} href='#'>{item}</a>
    })
    let monsters = []
    if (this.props.monsters) {
      monsters = _.map(this.props.monsters, (monster, index) =>
        <Monster
          monster={monster}
          chosenCategory={this.props.chosenCategory}
          chooseMonster={this.props.actions.chooseMonster}
          chosenMonster={this.props.chosenMonster}
          key={index} />
      )
    }
    return (
      <div className='row'>
        <div className='col-md-4'>
          <div className='list-group'>
            {items}
          </div>
        </div>
        <div className='col-md-8'>
          <Help>
            <p>The Monster Finder allows you to easily peruse the monsters from each of the categories in the core rulebook. See the monster's full stats and description, as well as the page number for the monster in the core book.</p>
          </Help>
          {monsters}
        </div>
      </div>
    )
  }

  handleCategoryClick(item, e) {
    e.preventDefault()
    this.props.actions.chooseCategory(item)
  }
}

class Monster extends Component {
  constructor(props) {
    super(props)
    this.handleTitleClick = this.handleTitleClick.bind(this)
  }

  render() {
    if (_.isEmpty(this.props.monster)) {
      return <div />
    } else {
      const monster = this.props.monster
      const expanded = (this.props.chosenMonster && this.props.chosenMonster.name) === this.props.monster.name
      const style = expanded ? 'success' : 'default'
      const caret = expanded ? <i className='fa fa-chevron-down' /> : <i className='fa fa-chevron-right' />
      const moves = monster.moves.map((move) => {
        return <li key={move}>{move}</li>
      })
      const title = (
        <h3 onClick={this.handleTitleClick}>{caret} {monster.name}</h3>
      )
      return (
        <Panel header={title} collapsible expanded={expanded} bsStyle={style}>
          <p><em>{monster.monster_tags}</em></p>
          <p>{monster.attack}; ({monster.damage}); {monster.hp} HP; {monster.armor};</p>
          <p><em>{monster.attack_tags}</em></p>
          <p><strong>Special Qualities:</strong> {monster.special_qualities}</p>
          <p><em>{monster.description} Instinct: {monster.instinct}</em></p>
          <ul>{moves}</ul>
          <p><small>p{monster.page}</small></p>
        </Panel>
      )
    }
  }

  handleTitleClick() {
    const currentChosenMonsterName = (this.props.chosenMonster || {}).name
    const nextMonsterName = currentChosenMonsterName === this.props.monster.name ? null : this.props.monster.name
    this.props.chooseMonster(this.props.chosenCategory, nextMonsterName)
  }
}
