import React, { Component } from 'react'
import { connect } from 'react-redux'

import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}></BandInput>
        <ul>
          {
            this.props.bands.map(band => <li>{band.name}</li>)
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bands: state.bands
})

const mapDispatchToProps = dispatch => ({
  addBand: (bandName) => dispatch({
    type: 'ADD_BAND',
    band: {name: bandName}
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
