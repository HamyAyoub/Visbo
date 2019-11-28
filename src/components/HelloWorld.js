import React, { Component } from 'react'
import { connect } from 'react-redux'

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
 
export default connect(mapStateToProps)(HelloWorld);