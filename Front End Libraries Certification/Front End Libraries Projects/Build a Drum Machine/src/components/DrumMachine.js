import React from 'react';
import ReactDOM from 'react-dom';




const bank = [
  {
    'key': 'Q',
    'id': 'Snare-01',
    'src': 'http://http://cdn.mos.musicradar.com/audio/samples/drum-demo-samples/CYCdh_K4-Snr05.mp3'
  },
  {
    'key': 'W',
    'id': 'Snare-02',
    'src': 'http://http://cdn.mos.musicradar.com/audio/samples/drum-demo-samples/CYCdh_K4-Snr05.mp3'
  },
  {
    'key': 'E',
    'id': 'Snare-03',
    'src': 'http://http://cdn.mos.musicradar.com/audio/samples/drum-demo-samples/CYCdh_K4-Snr05.mp3'
  },
  {
    'key': 'A',
    'id': 'Snare-04',
    'src': 'http://http://cdn.mos.musicradar.com/audio/samples/drum-demo-samples/CYCdh_K4-Snr05.mp3'
  },
  {
    'key': 'S',
    'id': 'Snare-05',
    'src': 'http://http://cdn.mos.musicradar.com/audio/samples/drum-demo-samples/CYCdh_K4-Snr05.mp3'
  },
  {
    'key': 'D',
    'id': 'Snare-06',
    'src': 'http://http://cdn.mos.musicradar.com/audio/samples/drum-demo-samples/CYCdh_K4-Snr05.mp3'
  },  
  {
    'key': 'Z',
    'id': 'Snare-07',
    'src': 'http://http://cdn.mos.musicradar.com/audio/samples/drum-demo-samples/CYCdh_K4-Snr05.mp3'
  },
  {
    'key': 'X',
    'id': 'Snare-08',
    'src': 'http://http://cdn.mos.musicradar.com/audio/samples/drum-demo-samples/CYCdh_K4-Snr05.mp3'
  },
  {
    'key': 'C',
    'id': 'Snare-09',
    'src': 'http://http://cdn.mos.musicradar.com/audio/samples/drum-demo-samples/CYCdh_K4-Snr05.mp3'
  }
]

const DrumPad = (props) => {
  const { value } = props;
  return(
    <div className="drum-pad">{value}</div>
  )
}

export default class DrumMachine extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
    text: 'Nothing to see here.'
   };
  }

  
 
  render() {
   return (
    <div id="drum-machine">
     <div id="display">
      {bank.map(bankie => {
        return (
          <DrumPad key={bankie.id} value={bankie.key} />
        )
      })}
   
     </div>
    </div>
   )
 }
}

ReactDOM.render(<DrumMachine />, document.getElementById("app"));
