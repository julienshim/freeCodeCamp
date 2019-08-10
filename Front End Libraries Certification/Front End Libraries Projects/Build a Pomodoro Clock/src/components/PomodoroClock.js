import React from "react";

export default class MarkdownPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5,
      session: 25,
      current: 25 * 60,
      isRunning: false
    };
  }

  handleStartStop = () =>  {
    this.setState(prevState => {
      if(prevState.isRunning) {
        clearInterval(this.clock);
      } else {
        this.clock = setInterval(this.handleDecrement, 1000);
      }
      return {isRunning: !prevState.isRunning}
    })
  }

  handleDecrement = () => {
    this.setState(prevState => {
      // Temporary for testing purposes.
      if (prevState.current === 0) { clearInterval(this.clock)};
      return {
      current: prevState.current - 1
       }
    });
  } 

  handleReset = () => {
    clearInterval(this.clock)
    this.setState({
      break: 5,
      session: 25,
      current: 25 * 60,
      isRunning: false
    })
  }

  handleSet(isIncrementing, type){
    this.setState(prevState => ({
      [type]: prevState[type] + (isIncrementing ? 1 : -1)
    }))
  }

  handleTimeFormat(){
    const minutes = String(Math.floor(this.state.current / 60)).padStart(2,"0");
    const seconds = String(this.state.current % 60).padStart(2,"0");
    return `${minutes}:${seconds}`
  }

  render() {
    return (
      <div id="main">
        <div className={""} id="break-label">Break</div>
        <div className={"buttons"} id="break-decrement" onClick={() => this.handleSet(false, "break")}>-</div>
        <div className={"buttons"} id="break-increment" onClick={() => this.handleSet(true, "break")}>+</div>
        <div className={""} id="break-length">{this.state.break}</div>
        <div className={""}id="session-label">Session</div>
        <div className={"buttons"}id="session-decrement" onClick={() => this.handleSet(false, "session")}>-</div>
        <div className={"buttons"}id="session-increment" onClick={() => this.handleSet(true, "session")}>+</div>
        <div className={""}id="session-length">{this.state.session}</div>
        <div className={""}id="timer-label">Timer</div>
        <div className={""}id="time-left">{this.handleTimeFormat()}</div>
        <div className={""}id="start_stop" onClick={this.handleStartStop}>
          Start Stop
        </div>
        <div id="reset" onClick={this.handleReset}>
          Reset
        </div>
      </div>
    );
  }
}
