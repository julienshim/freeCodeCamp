import React from "react";
import { timingSafeEqual } from "crypto";

export default class MarkdownPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "break",
      break: 5,
      session: 25,
      current: 1500,
      isRunning: false
    };
  }

  componentDidUpdate() {
    if (this.state.current === 0) {
      this.state.running && this.handleStartStop();
      this.setState(
        {
          current:
            this.state.type === "session"
              ? this.state.break * 60
              : this.state.session * 60,
          type: this.state.type === "session" ? "break" : "session"
        },
        () => {
          this.handleStartStop();
        }
      );
    }
  }

  handleStartStop = () => {
    this.setState(prevState => {
      if (prevState.isRunning) {
        clearInterval(this.clock);
      } else {
        this.clock = setInterval(this.handleDecrement, 1000);
      }
      return { isRunning: !prevState.isRunning };
    });
  };

  handleDecrement = () => {
    this.setState(prevState => {
      // Temporary for testing purposes.
      if (prevState.current === 1) {
        clearInterval(this.clock);
      }
      return {
        current: prevState.current - 1
      };
    });
  };

  handleReset = () => {
    clearInterval(this.clock);
    this.setState({
      type: "session",
      break: 5,
      session: 25,
      current: 1500,
      isRunning: false
    });
  };

  handleSetLength(isIncrementing, type) {
    if (this.state.isRunning) return;
    // If decrementing set length and length of either type is 1 return
    if (!isIncrementing && this.state[type] === 1) return;
    // If incremeanting set length and length of either type is 60 return
    if (isIncrementing && this.state[type] === 60) return;

    this.setState(prevState => {
      const newStateA = { [type]: prevState[type] + (isIncrementing ? 1 : -1) };
      const newStateB = { [type]: prevState[type] + (isIncrementing ? 1 : -1),
                          current: prevState[type] * 60 + (isIncrementing ? 60 : -60)
      };
      return this.state.type !== type ? newStateA : newStateB;
    });
  }

  handleTimeFormat() {
    const time = this.state.current;
    // Above with pass 11 and 12 but below with pass 8. Think a method is needed for phases.
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  render() {
    return (
      <div id="main">
        <div className={""} id="break-label">
          Break
        </div>
        <div
          className={"buttons"}
          id="break-decrement"
          onClick={() => this.handleSetLength(false, "break")}
        >
          -
        </div>
        <div
          className={"buttons"}
          id="break-increment"
          onClick={() => this.handleSetLength(true, "break")}
        >
          +
        </div>
        <div className={""} id="break-length">
          {this.state.break}
        </div>
        <div className={""} id="session-label">
          Session
        </div>
        <div
          className={"buttons"}
          id="session-decrement"
          onClick={() => this.handleSetLength(false, "session")}
        >
          -
        </div>
        <div
          className={"buttons"}
          id="session-increment"
          onClick={() => this.handleSetLength(true, "session")}
        >
          +
        </div>
        <div className={""} id="session-length">
          {this.state.session}
        </div>
        <div className={""} id="timer-label">
          {/* Capitalize First Letter */}
          {this.state.type.charAt(0).toUpperCase() + this.state.type.slice(1)}
        </div>
        <div className={""} id="time-left">
          {this.handleTimeFormat()}
        </div>
        <div className={""} id="start_stop" onClick={this.handleStartStop}>
          Start Stop
        </div>
        <div id="reset" onClick={this.handleReset}>
          Reset
        </div>
      </div>
    );
  }
}
