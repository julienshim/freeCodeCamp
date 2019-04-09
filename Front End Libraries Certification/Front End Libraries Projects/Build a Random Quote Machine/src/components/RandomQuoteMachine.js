import React from "react";

export default class RandomQuoteMachineApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="quote-box">
        Random Quote Machine
        <div id="text" />
        <div id="author" />
        <div id="new-quote" />
        <a id="tweet-quote" />
      </div>
    );
  }
}
