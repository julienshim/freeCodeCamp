import React from 'react';

export default class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keypress : false
    }
  }

  audioRef = React.createRef();

  handleActive = () => {
    this.setState(prevState => ({
      keypress: !prevState.keypress
    }))
  }

  handleClick = () => {
    const {id, handleDisplay, handleActive} = this.props;
    // Because Chrome audio issues
    this.audioRef.current.play().then(response => {
      // console.log('response', response);
    }).catch(error => {
      console.log(error);
    })
    this.audioRef.current.currentTime = 0
    handleDisplay(id);
    this.handleActive();
    setTimeout(() => this.handleActive(), 200);
  }

  handleKeydown = (event) => {
    const { value } = this.props;
    event.key.toUpperCase() === value && this.handleClick()
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeydown, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }

  render() {
    const {id, value, src} = this.props;
    const primary = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
    // By pass the 9 button test limit
    const color = `${primary.includes(value) ? 'drum-pad' : 'drum-pad-extended'} ${this.state.keypress && 'active'} ${id.split(' ')[0].toLowerCase()}`
    return (
      <div 
        className={color} 
        id={id} 
        onClick={this.handleClick}
      >
        <h1>{value}</h1>
        <audio 
          id={value}
          className="clip"
          src={src} 
          ref={this.audioRef} 
        ></audio>
      </div>
    )
  }

}