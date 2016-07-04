import { connect } from 'react-redux';
import React from 'react';
import { formatTime } from '../../lib/formatters';
import { getRemainingTime } from '../../reducers';

class AppComponent extends React.Component {
  render() {
    return <span>{this.props.remainingTime}</span>;
  }
}

const mapStateToProps = (state) => {
  return {
    remainingTime: formatTime(getRemainingTime(state))
  };
};

export const App = connect(
  mapStateToProps
)(AppComponent);