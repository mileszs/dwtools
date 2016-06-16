import React, { Component, PropTypes } from 'react';
import _ from 'lodash'

export default class MonsterFinder extends Component {
  render() {
    console.log('bug', this.props)
    let items = this.props.categories.map((item) => {
      return <li><a key={item} className='collection-item waves-effect waves-light' onClick={_.partial(this.props.actions.chooseMonster, item)} href='#'>{item}</a></li>
    })
    let monster = ''
    if (this.props.monster) {
      monster = <YourMonster monster={this.props.monster} />
    }

    return (
      <div className='row'>
        <div className='col m6 s12'>
          <ul>
            {items}
          </ul>
        </div>
        <div className='col m6 s12'>
          <p>The Monster Finder provides a random monster's name and the page number at which it can be found in the Dungeon World manual. I hope to add to this, providing links to the SRD, perhaps eventually full stat blocks. Check back once in a while!</p>
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
      return (
        <div className="card-panel brown white-text">
          <span className="card-title">Your Monster</span>
          <p><strong>{this.props.monster.name}</strong>: p{this.props.monster.page} &nbsp;<a href={this.props.monster.url} target="_blank"><i className="fa fa-external-link" title="Link to Dungeon World SRD"/></a></p>
        </div>
      )
    }
  }
}
