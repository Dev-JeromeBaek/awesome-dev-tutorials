import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TestProps extends Component {
  render() {
    return (
      <div>
        <p>value which is passed by test props</p>
        <p>{this.props.text}</p>
        <button onClick={this.props.valid}>valid_test</button>
      </div>
    );
  }
}

TestProps.defaultProps = {
  text: 'This is default props',
  valid: () => {
    console.log('there is no valid function');
  },
};

TestProps.propTypes = {
  text: PropTypes.string.isRequired,
  valid: PropTypes.func.isRequired,
};

export default TestProps;
