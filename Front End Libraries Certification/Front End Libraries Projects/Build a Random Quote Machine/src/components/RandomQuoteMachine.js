import React from "react";

export default class RandomQuoteMachineApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "test",
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
    const ranNum = Math.floor(Math.random()*this.state.quotes.length);
    return (
      <div>
    Random Quote Machine
    
    {this.state.quotes.filter((val, index) => index === ranNum).map((quote, index) => (
      <div id="quote-box" key={index}>
        <div id="text">{quote.quote}</div> 
        <div id="author">{quote.author}</div>
        <a id="tweet-quote">Tweet Quote</a>
      </div>
    ))}
    

   </div>
    );
  }
}
