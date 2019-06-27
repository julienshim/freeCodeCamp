import React from "react";
import ReactDOM from 'react-dom';

const bank = [
  {"Q": '', id: "" },
  {"W": '', id: "" },
  {"E": '', id: "" }, 
  {"A": '', id: "" }, 
  {"S": '', id: "" }, 
  {"D": '', id: "" }, 
  {"Z": '', id: "" },
  {"X": '', id: "" }, 
  {"C": '', id: "" }
]

const DrumPad = (props) => {

  return(
    <div className={drumPad}>

    </div>
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
        {bank.map((key, index) => <DrumPad />)}
     </div>
    </div>
   )
 }
}

ReactDOM.render(<DrumMachine />, document.getElementById("app"));
