import React, { Component } from 'react'

export class TopLoader extends Component {
    

    

  render() {
    let style = {
        height: this.props.height,
    width: this.props.width,
    backgroundColor: this.props.color

    }

    return (
      <div className='top-loader' style={style}></div>
    )
  }
}

export default TopLoader