import React from "react";
// import ReactMarkdown from 'react-markdown';
import marked from 'marked';

export default class MarkdownPreview extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
    markdown: ''
   };
  }
  
  componentDidMount() {
   this.setState({
    markdown: '# h1 size\n\n## h2 size\n\n[alink](http://www.google.com)\n\n*bolded text*\n\n![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text")\n\n> This is a block quote.\n\n1. This is a list item.\n\n```javascript var s = "JavaScript syntax highlighting"; alert(s);```\n\n<p>Is this inline code.</p>'
   })
  }
  
  handeCreateMarkup() {
   return {__html: marked(this.state.markdown)};
  }
  
  handleChange = (event) => {
   this.setState({markdown: event.target.markdown});
  }
 
  render() {
   // const input = {this.state.markdown};
   return (
    <div>
         <div id="preview" dangerouslySetInnerHTML={this.handeCreateMarkup()} >
     </div>
      <textarea id="editor" value={this.state.markdown} onChange={this.handleChange} />
 
    </div>
   );
  }
 }