import React from 'react';

export default class JavaScriptCalculator extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
    display: 'Nothing to see here'
   };
  }
  
  render() {
   return (
    <div id="javascript-calculator">
      {this.state.display}
    </div>
   )
 }
}