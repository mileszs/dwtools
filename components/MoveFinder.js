import React from 'react';
import movesJSON from '../moves'
import _ from 'lodash'

export default class MoveFinder {
  render() {
    let buttons = []
    let buttonsHTML = ''
    let currentLevel = this.currentLevel()
    if (_.isArray(currentLevel)) {
      let randomMove = _(currentLevel).at(Math.floor(Math.random() * currentLevel.length)).first();
      buttons = currentLevel.map((text) => {
        return <MoveItem move={text} key={text} />
      })
      buttonsHTML = [
        <YourMove move={randomMove} key='yourmove' />
        ,
        <MovesList items={buttons} key='moveslist'/>
      ]
    } else {
      buttons = _.keys(currentLevel).map((text) => {
        return <CategoryLink key={text} choose={this.props.choose} text={text} />
      })
      buttonsHTML = (
        <div className='collection'>
          {buttons}
        </div>
      )
    }

    return (
      <div className='col s6'>
        {buttonsHTML}
      </div>
    );
  }

  currentLevel() {
    let currentLevel = movesJSON
    let previousLevel = this.props.move || []
    previousLevel.forEach((move) => {
      currentLevel = currentLevel[move]
    })
    return currentLevel;
  }
}

class CategoryLink {
  render() {
    return (
      <a className='collection-item waves-effect waves-light' onClick={_.partial(this.props.choose, this.props.text)}>{this.props.text}</a>
    )
  }
}

class YourMove {
  render() {
    return (
      <div className="card-panel brown white-text">
        <span className="card-title">Your Move</span>
        <p>{this.props.move}</p>
      </div>
    )
  }
}

class MovesList {
  render() {
    return (
      <ul className='collection'>
        {this.props.items}
      </ul>
    )
  }
}

class MoveItem {
  render() {
    return (
      <li className='collection-item'>{this.props.move}</li>
    )
  }
}
