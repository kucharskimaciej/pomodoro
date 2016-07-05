import { connect } from 'react-redux';
import React from 'react';
import { formatTime } from '../../lib/formatters';
import { getRemainingTime, getTimerDuration, isTimerRunning } from '../../reducers';
import { runTimer, stopTimer } from '../../actions/timer';

class AppComponent extends React.Component {
  toggleTimer() {
    if (this.props.timerRunning) {
      this.props.stopTimer();
    } else {
      this.props.startTimer(this.props.timerDuration);
    }
  }

  render() {
    return (
      <span onClick={this.toggleTimer.bind(this)}>
        {this.props.remainingTime}
      </span>
    );
  }
}

AppComponent.propTypes = {
  remainingTime: React.PropTypes.string.isRequired,
  timerDuration: React.PropTypes.number.isRequired,
  timerRunning: React.PropTypes.bool.isRequired,

  startTimer: React.PropTypes.func.isRequired,
  stopTimer: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  remainingTime: formatTime(getRemainingTime(state)),
  timerDuration: getTimerDuration(state),
  timerRunning: isTimerRunning(state)
});

const mapDispatchToProps = dispatch => ({
  startTimer: (duration) => {
    dispatch(runTimer(duration));
  },
  stopTimer: () => {
    dispatch(stopTimer());
  }
});

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);
