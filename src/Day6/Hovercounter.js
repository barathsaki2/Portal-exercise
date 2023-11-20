import React, { Component } from 'react'
import Encomponent from './Encomponent'

class Hovercounter extends Component {
  render() {
    return (
      <div>
        <button onMouseOver={this.props.inc}>Click me {this.props.count}</button>
      </div>
    )
  }
}
export default Encomponent(Hovercounter)
