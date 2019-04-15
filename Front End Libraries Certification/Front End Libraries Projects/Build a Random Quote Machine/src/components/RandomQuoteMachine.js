import React from "react";

export default class RandomQuoteMachineApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    }
  }

  componentDidMount() {
    fetch("https://api.myjson.com/bins/1b0y9w")
    .then(res => res.json())
    .then(
       result => {
          console.log(result.quotes)
          this.setState({
            quotes: [...result.quotes]
          })
       },
       error => {
          console.log(error);
       }
    );
  }

  render() {
    return (
      <div id="quote-box">
        Random Quote Machine
        {this.state.quotes.map((quote, index) => (
        <p key={index}>{index+1}. {quote.quote} - {quote.author}!</p>
    ))}
        <div id="text" />
        <div id="author" />
        <div id="new-quote" />
        <a id="tweet-quote" />
      </div>
    );
  }
}
