import React from "react";

export default class MarkdownPreview extends React.Component {
  constructor(props) {
   super(props);
   this.state = {};
  }
 
  render() {
   const input = '# This is a header\n\nAnd this is a paragraph'
   return (
    <ReactMarkdown source={input} />
   );
  }
 }
 
 ReactDOM.render(<MarkdownPreview />, document.getElementById("app"));