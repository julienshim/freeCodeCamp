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

  componentDidMount() {
    this.clock = setInterval(() => {
      this.setState(prevState => ({
        current: prevState.current - 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  handleStartStop = () =>  {
    this.setState(prevState=>{
      if(prevState.isRunning) {
        clearInterval(this.clock);
      } else {
        const newStart = this.state.current;
        this.clock = setInterval(()=> {
          this.setState({
            current: newStart
          })
        });

      }
      return {isRunning: !prevState.isRunning}
    })
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

  handleRun(){
    this.interval = setInterval(this.handleDecrement, 1000);
  }

  handleDecrement = () => {
    this.setState(prevState => ({
      current: prevState - 1
    }));
  } 

  handleSet(isIncrementing, type){
    this.setState(prevState => ({
      [type]: prevState[type] + isIncrementing ? 1 : -1 
    }))
  }

  handleStop(){
    clearInterval(this.interval)
  }

  handleTimeFormat(){
    const minutes = String(Math.floor(this.state.current / 60)).padStart(2,"0");
    const seconds = String(this.state.current % 60).padStart(2,"0");
    return `${minutes}:${seconds}`
  }

  render() {
    return (
      <div id="main">
        <div id="break-label">Break</div>
        <div id="break-decrement" onClick={() => this.handleSet(false, "break")}>-</div>
        <div id="break-increment" onClick={() => this.handleSet(true, "break")}>+</div>
        <div id="break-length">{this.state.break}</div>
        <div id="session-label">Session</div>
        <div id="session-decrement" onClick={() => this.handleSet(false, "session")}>-</div>
        <div id="session-increment" onClick={() => this.handleSet(true, "session")}>+</div>
        <div id="session-length">{this.state.session}</div>
        <div id="timer-label">Timer</div>
        <div id="time-left">{this.handleTimeFormat()}</div>
        <div id="timer-length">{this.state.session}</div>
        <div id="start_stop" onClick={this.handleStartStop}>
          Start Stop
        </div>
        <div id="reset" onClick={this.handleReset}>
          Reset
        </div>
      </div>
    );
  }
}
