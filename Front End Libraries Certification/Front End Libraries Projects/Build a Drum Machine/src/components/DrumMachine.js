import React from "react";
import ReactDOM from 'react-dom';

const bank = {
  "Q": '',
  "W": '',
  "E": '', 
  "A": '', 
  "S": '', 
  "D": '', 
  "Z": '',
  "X": '', 
  "C": ''
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

     </div>
    </div>
   )
 }
}

ReactDOM.render(<DrumMachine />, document.getElementById("app"));
