// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  } 

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addBand(this.state.name)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.name} onChange={this.handleChange}></input>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput
