import React from 'react';
export default class Help {
  render() {
    return (
      <div className='col m6 s12'>
        <p>Based on the series of articles at RPG Alchemy, <a href="http://www.rpgalchemy.com/hard-moves-gm-intrusions-1/">Hard Moves & GM Intrusions</a>, here is a tool to help you quickly find a hard move in the heat of the moment for your game.</p>
        <p>How does it work?</p>
        <p>Simply ask yourself <strong>'What best describes the current situation?'</strong> Click the button with the answer. Do that again until you're presented with a hard move to use.</p>
        <p>A list of possible moves for your situation is included, in case the bolded one plucked from that list for you isn't to your liking.</p>
        <ResetButton {...this.props} />
      </div>
    )
  }
}

class ResetButton {
  render() {
    if (!_.isEmpty(this.props.lastChoice)) {
      return (
        <div>
          <div className='divider'></div>
          <div className='section'>
            <p>Want to start over? Just click reset:</p>
            <p><a onClick={this.props.resetMove} className='waves-effect waves-light btn' href='#reset'>Reset</a></p>
          </div>
        </div>
      )
    } else {
      return <div />
    }
  }
}
