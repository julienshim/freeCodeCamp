import React from "react";

export default class DrumMachine extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
    nothing: ''
   };
  }
  
  componentDidMount() {

  }

 
  render() {
   return (
    <div id="main">
     "Nothing to see here."
    </div>
   )
 }
}

ReactDOM.render(<DrumMachine />, document.getElementById("app"));
