import React from 'react';
import ReactDOM from 'react-dom';

const audioBank = [
  {
    'key': 'Q',
    'id': 'Kick 1',
    'src': './audio/ToyKit1 - Kick 1.mp3'
  },
  {
    'key': 'W',
    'id': 'Close Hat 1',
    'src': './audio/ToyKit2 - Close Hat 1.mp3'
  },
  {
    'key': 'E',
    'id': 'Hi Hat 1',
    'src': './audio/ToyKit3 - Hi Hat 1.mp3'
  },
  {
    'key': 'A',
    'id': 'Snare 1',
    'src': './audio/ToyKit4 - Snare 1.mp3'
  },
  {
    'key': 'S',
    'id': 'Kick 2',
    'src': './audio/ToyKit5 - Kick 2.mp3'
  },
  {
    'key': 'D',
    'id': 'Close Hat 2',
    'src': './audio/ToyKit6 - Close Hat 2.mp3'
  },  
  {
    'key': 'Z',
    'id': 'Hi Hat 2',
    'src': './audio/ToyKit7 - Hi Hat 2.mp3'
  },
  {
    'key': 'X',
    'id': 'Snare 2',
    'src': './audio/ToyKit8 - Snare 2.mp3'
  },
  {
    'key': 'C',
    'id': 'Kick 3',
    'src': './audio/ToyKit9 - Kick 3.mp3'
  }
]

class DrumPad extends React.Component {

  audioRef = React.createRef();

  handleClick = () => {
    const {id, handleDisplay} = this.props;
    // Because Chrome audio issues
    this.audioRef.current.play().then(response => {
      // console.log('response', response);
    }).catch(error => {
      console.log(error);
    })
    this.audioRef.current.currentTime = 0
    handleDisplay(id);
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
    return (
      <div 
        className='drum-pad'
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

export default class DrumMachine extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
    display: 'Nothing to see here.'
   };
  }

  handleDisplay = (id) => {
    // console.log(event);
    this.setState({
      display: id
    })
  }
  
  render() {
   return (
    <div id="drum-machine">
     <div id="display">
      {this.state.display}
     </div>
     {audioBank.map(element => {
        return (
          <DrumPad 
            key={element.id} 
            id={element.id}
            value={element.key} 
            src={element.src}
            handleDisplay={this.handleDisplay}
          />
        )
      })}
    </div>
   )
 }
}

ReactDOM.render(<DrumMachine />, document.getElementById("app"));
