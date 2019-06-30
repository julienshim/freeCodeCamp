import React from 'react';
import ReactDOM from 'react-dom';




const audioBank = [
  {
    'key': 'Q',
    'id': 'clap-808',
    'src': './audio/clap-808.wav'
  },
  {
    'key': 'W',
    'id': 'clap-analog',
    'src': './audio/clap-analog.wav'
  },
  {
    'key': 'E',
    'id': 'clap-crushed',
    'src': './audio/clap-crushed.wav'
  },
  {
    'key': 'A',
    'id': 'clap-fat',
    'src': './audio/clap-fat.wav'
  },
  {
    'key': 'S',
    'id': 'clap-slapper',
    'src': './audio/clap-slapper.wav'
  },
  {
    'key': 'D',
    'id': 'clap-tape',
    'src': './audio/clap-tape.wav'
  },  
  {
    'key': 'Z',
    'id': 'cowbell-808',
    'src': './audio/cowbell-808.wav'
  },
  {
    'key': 'X',
    'id': 'crash-808',
    'src': './audio/crash-808.wav'
  },
  {
    'key': 'C',
    'id': 'crash-acoustic',
    'src': './audio/crash-acoustic.wav'
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

  handleDisplay (event) {
    console.log(event);
    // this.setState({
    //   display: 
    // })
  }
  


  render() {
   return (
    <div id="drum-machine">
     <div id="display">
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
    </div>
   )
 }
}

ReactDOM.render(<DrumMachine />, document.getElementById("app"));
