import React from "react";
import ReactMarkdown from 'react-markdown';

export default class MarkdownPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:
        '# h1\n## h2\n[link](http://julienshim.com)\n\n```codeblock```\n\n * list item \n\n > blockquote \n \n ![Alt](/wp.png "Title") \n **bold**'
    };
  }

  handleChange = (event) => {
   this.setState({value: event.target.value});
  }

  render() {
    // const input = {this.state.value};
    return (
      <div>
        <textarea
          id="editor"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div id="preview">
          <ReactMarkdown source={this.state.value} escapeHtml={false} />
        </div>
      </div>
    );
  }
}