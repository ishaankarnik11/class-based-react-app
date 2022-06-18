import React, { Component } from 'react'
import loading_spinner from '../loading_spinner.gif'

export class Spinner extends Component {
  render() {
    return (
      <div  className="text-center"><img src={loading_spinner} alt="spinner" /></div>
    )
  }
}

export default Spinner