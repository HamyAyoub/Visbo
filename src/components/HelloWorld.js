import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function mapStateToProps(state) {
  return {
    text: state.text,
  };
}

const HelloWorld = (props) => (<h1>{props.text}</h1>);


HelloWorld.propTypes = {
  text: PropTypes.string,
};

export default connect(mapStateToProps)(HelloWorld);
