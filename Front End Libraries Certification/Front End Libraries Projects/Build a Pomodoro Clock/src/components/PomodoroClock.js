import React from "react";

const Label = (props) => {
  const { name, type } = props;
  const string = name === "timer" ? type : name;
  return (
    <div className={""} id={`${name}-label`}>{`${string}`.charAt(0).toUpperCase() + `${string}`.slice(1)}</div>
  )
}

const Button = (props) => {
  const { className, type, isIncrementing, handleSetLength} = props;
  return (
    <div className={className} id={`${type}-${isIncrementing ? "increment" : "decrement"}`} onClick={handleSetLength}>{isIncrementing ? '+' : '-'}</div>
  )
}

export default class MarkdownPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "session",
      break: 5,
      session: 25,
      timer: 1500,
      isRunning: false
    };
  }

  beep = React.createRef();

  componentDidMount() {
    document.body.style.background = 'rgb(255,181, 17)';
  }

  componentDidUpdate() {
    this.handleAudio(this.state.timer);
    this.handleColor();
    if (this.state.timer < 0) {
      this.state.isRunning && this.handleStartStop();
      this.setState(
        {
          timer: this.state.type === "session"
                    ? this.state.break * 60
                    : this.state.session * 60,
          type: this.state.type === "session" ? "break" : "session"
        }, this.handleStartStop
      );
    }
  }

  handleColor() {
    document.body.style.background = this.state.type === "session" ? 'rgb(18, 149, 216)' : 'rgb(255,181, 17)';
  }

  handleAudio(time) {
    time === 0 && this.beep.current.play().then(response => {
        // console.log('response', response);
      }).catch(error => {
        console.log(error);
      })
  }

  handleStartStop = () => {
    this.setState(prevState => {
      if (prevState.isRunning) {
        clearInterval(this.clock);
      } else {
        this.clock = setInterval(this.handleDecrement, 1
          );
      }
      return { isRunning: !prevState.isRunning };
    });
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      timer: prevState.timer - 1
    }));
  };

  handleReset = () => {
    clearInterval(this.clock);
    this.setState({
      type: "session",
      break: 5,
      session: 25,
      timer: 1500,
      isRunning: false
    });
    this.beep.current.pause();
    this.beep.current.currentTime = 0
  };

  handleSetLength(isIncrementing, type) {
    if (this.state.isRunning) return;
    // If decrementing set length and length of either type is 1 return
    if (!isIncrementing && this.state[type] === 1) return;
    // If incremeanting set length and length of either type is 60 return
    if (isIncrementing && this.state[type] === 60) return;

    this.setState(prevState => {
      const newStateLinked = { [type]: prevState[type] + (isIncrementing ? 1 : -1),
                                timer: prevState[type] * 60 + (isIncrementing ? 60 : -60) };
      const newStateUnLinked = { [type]: prevState[type] + (isIncrementing ? 1 : -1) };
     
      return this.state.type === type ? newStateLinked : newStateUnLinked;
    });
  }

  handleTimeFormat() {
    const minutes = String(Math.floor(this.state.timer / 60)).padStart(2, "0");
    const seconds = String(this.state.timer % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  render() {
    const totalTime = this.state[this.state.type] * 60;
    const dynamic =  this.state.timer / totalTime;

    const sessionStyle = {
        width: 100 * dynamic + 'vw',
        backgroundColor: 'rgb(255,181, 17)',
        right: 0
    };

    const breakStyle = {
      width: 100 * dynamic + 'vw',
      backgroundColor: 'rgb(18, 149, 216)',
      left: 0
    };

    return (

      <div id="main">
        <div id="fizz" style={this.state.type === "session" ? sessionStyle : breakStyle } ></div>
        <Label name={"break"} type={this.state.type} />
        <Button className={"buttons"} type={"break"} isIncrementing={false} handleSetLength={() => this.handleSetLength(false, "break")} /> 
        <Button className={"buttons"} type={"break"} isIncrementing={true} handleSetLength={() => this.handleSetLength(true, "break")} /> 
        <div className={""} id="break-length">{this.state.break}</div>
        <Label name={"session"} type={this.state.type}/>
        <Button className={"buttons"} type={"session"} isIncrementing={false} handleSetLength={() => this.handleSetLength(false, "session")} /> 
        <Button className={"buttons"} type={"session"} isIncrementing={true} handleSetLength={() => this.handleSetLength(true, "session")} /> 
        <div className={""} id="session-length">{this.state.session}</div>
        <Label name={"timer"} type={this.state.type} />
        <div className={""} id="time-left">
          {this.handleTimeFormat()}
        </div>
        <div className={""} id="start_stop" onClick={this.handleStartStop}>
          Start Stop
        </div>
        <div id="reset" onClick={this.handleReset}>
          Reset
        </div>
        <audio 
          id='beep'
          src='/audio/ebeep.mp3' 
          ref={this.beep}>
        </audio>
      </div>
    );
  }
}
