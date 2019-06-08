import React from "react";
import marked from "marked";

marked.setOptions({
  gfm: true,
  breaks: true
});

export default class MarkdownPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ""
    };
  }

  componentDidMount() {
    this.setState({
      markdown:
        '# a header\n\n## a subheader\n\n[a link](http://google.com)\n\n`inline code`\n\n```\nThis is code block\n```\n\n1. a list item\n\n> a block quote\n\n![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")\n\n**bolded text**'
    });
  }

  handeCreateMarkup() {
    return { __html: marked(this.state.markdown) };
  }

  handleChange = (event) => {
    this.setState({ markdown: event.target.value });
  };

  render() {
    return (
      <div>
        <div id="preview" dangerouslySetInnerHTML={this.handeCreateMarkup()} />
        <textarea
          id="editor"
          value={this.state.markdown}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
