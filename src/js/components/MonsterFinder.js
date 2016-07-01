import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import _ from 'lodash'

export default class MonsterFinder extends Component {
  render() {
    let items = this.props.categories.map((item) => {
      const active = this.props.chosenCategory === item ? 'active' : ''
      const itemClass = classNames({
        'list-group-item': true,
        'active': this.props.chosenCategory === item
      })
      return <a key={item} className={itemClass} onClick={_.partial(this.props.actions.chooseMonster, item)} href='#'>{item}</a>
    })
    let monster = ''
    if (this.props.monster) {
      monster = <YourMonster monster={this.props.monster} />
    }

    return (
      <div className='row'>
        <div className='col-md-4'>
          <div className='list-group'>
            {items}
          </div>
        </div>
        <div className='col-md-8'>
          <div className='well'>
            <p>The Monster Finder allows you to randomly get a monster from one of the categories in the core rulebook, see its full stats and description, as well as a page number and link to the Dungeon World SRD.</p>
          </div>
          {monster}
        </div>
      </div>
    )
  }
}

class YourMonster extends Component {
  render() {
    if (_.isEmpty(this.props.monster)) {
      return <div />
    } else {
      const monster = this.props.monster
      const moves = monster.moves.map((move) => {
        return <li key={move}>{move}</li>
      })
      return (
        <div className="panel panel-info">
          <div className="panel-heading">
            <div className="panel-title"><h3>{monster.name}</h3></div>
          </div>
          <div className="panel-body">
            <p><em>{monster.monster_tags}</em></p>
            <p>{monster.attack}; ({monster.damage}); {monster.hp} HP; {monster.armor};</p>
            <p><em>{monster.attack_tags}</em></p>
            <p><strong>Special Qualities:</strong> {monster.special_qualities}</p>
            <p><em>{monster.description} Instinct: {monster.instinct}</em></p>
            <ul>{moves}</ul>
          </div>
          <div className="panel-footer">
            <small>p{monster.page} &nbsp;<a href={monster.url} target="_blank"><i className="fa fa-external-link" title="Link to Dungeon World SRD"/></a></small>
          </div>
        </div>
      )
    }
  }
}
