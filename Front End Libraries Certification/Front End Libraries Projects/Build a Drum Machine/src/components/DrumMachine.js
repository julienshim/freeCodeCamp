import React from "react";
import ReactDOM from 'react-dom';

export default class DrumMachine extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
    text: 'Nothing to see here.'
   };
  }
 
  render() {
   return (
    <div id="main">
     {this.state.text}
    </div>
   )
 }
}

ReactDOM.render(<DrumMachine />, document.getElementById("app"));
