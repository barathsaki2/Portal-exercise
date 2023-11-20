import React, { Component } from 'react'

export default class Componentdid extends Component {
    state={color1:"Yellow"}
    componentDidMount()
    {
        setTimeout(()=>{this.setState({color1:"Blue"})},3000)
    }
  render() {
    return (
      <div>
        <h1>{this.state.color1}</h1>
      </div>
    )
  }
}
