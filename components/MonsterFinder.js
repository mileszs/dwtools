import React from 'react';
import monsterJSON from '../data/monsters'
import _ from 'lodash'
import classNames from 'classnames'

export default class Monsters {
  render() {
    let items = this.props.categories.map((item) => {
      return <a key={item} className='collection-item waves-effect waves-light' onClick={_.partial(this.props.chooseMonster, item)}>{item}</a>
    })
    let monster = ''
    if (this.props.monster) {
      monster = <YourMonster monster={this.props.monster} />
    }

    return (
      <div className='row'>
        <div className='col m6 s12'>
          <div className='collection'>
            {items}
          </div>
        </div>
        <div className='col m6 s12'>
          <p>The Monster Finder provides a random monster's name and the page number at which it can be found in the Dungeon World manual. I hope to add to this, providing links to the SRD, perhaps eventually full stat blocks. Check back once in a while!</p>
          {monster}
        </div>
      </div>
    )
  }
}

class YourMonster {
  render() {
    if (_.isEmpty(this.props.monster)) {
      return <div />
    } else {
      return (
        <div className="card-panel brown white-text">
          <span className="card-title">Your Monster</span>
          <p><strong>{this.props.monster.name}</strong>: p{this.props.monster.page}</p>
        </div>
      )
    }
  }
}
