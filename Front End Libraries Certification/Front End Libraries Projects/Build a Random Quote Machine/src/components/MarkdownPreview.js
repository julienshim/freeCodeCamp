import React from "react";

export default class MarkdownPreview extends React.Component {
  constructor(props) {
   super(props);
   this.state = {};
  }
 
  render() {
   return (
    <div>
     <p>This is the beginning.</p>
    </div>
   );
  }
 }
 
 ReactDOM.render(<MarkdownPreview />, document.getElementById("app"));