import React, { Component } from 'react'
import Encomponent from './Encomponent'

class ClickCounter extends Component {d
  render() {
    return (
      <div>
        <button onClick={this.props.inc}>Click me {this.props.count}</button>
      </div>
    )
  }
}
export default Encomponent(ClickCounter)