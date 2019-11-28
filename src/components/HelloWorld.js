import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function mapStateToProps(state) {
  return {
    text: state.text
  };
}

class HelloWorld extends Component {
  render() { 
    let { text } = this.props
    return ( 
      <h1>{text}</h1>
     );
  }
}

HelloWorld.propTypes = {
  text: PropTypes.string
}
 
export default connect(mapStateToProps)(HelloWorld);