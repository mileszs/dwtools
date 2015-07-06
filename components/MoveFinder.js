import React from 'react';
import movesJSON from '../moves'
import _ from 'lodash'
import classNames from 'classnames'

export default class MoveFinder {
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
        return <CategoryLink key={text} choose={this.props.choose} text={text} />
      })
      itemsHTML = <CategoryList items={items} />
    }

    return (
      <div className='col s6'>
        <YourMove move={this.props.yourMove} key='yourmove' />
        {itemsHTML}
      </div>
    );
  }
}

class CategoryList {
  render() {
    return (
      <div className='collection'>
        {this.props.items}
      </div>
    )
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
    if (_.isEmpty(this.props.move)) {
      return <div />
    } else {
      return (
        <div className="card-panel brown white-text">
          <span className="card-title">Your Move</span>
          <p>{this.props.move}</p>
        </div>
      )
    }
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
  classnames() {
    return classNames(
      'collection-item',
      { 'yellow lighten-4': this.props.move === this.props.yourMove }
    )
  }

  render() {
    return (
      <li className={this.classnames()}>{this.props.move}</li>
    )
  }
}
