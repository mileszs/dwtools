import React from 'react';
import monsterJSON from '../data/monsters'
import _ from 'lodash'
import classNames from 'classnames'

export default class Monsters {
  render() {
    let items = this.props.categories.map((item) => {
      return <a className='collection-item waves-effect waves-light' onClick={_.partial(this.props.chooseMonster, item)}>{item}</a>
    })
    let monster = ''
    if (this.props.monster) {
      monster = <YourMonster monster={this.props.monster} />
    }

    return (
      <div className='row'>
        <div className='col s6'>
          <div className='collection'>
            {items}
          </div>
        </div>
        <div className='col s6'>
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
