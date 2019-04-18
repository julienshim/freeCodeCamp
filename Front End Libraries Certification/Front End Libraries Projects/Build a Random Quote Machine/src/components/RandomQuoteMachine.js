import React from 'react';

export default class RandomQuoteMachineApp extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
    randomQuoteIndex: 0,
    quotes: []
   };
  }
 
  componentDidMount() {
   fetch("https://api.myjson.com/bins/1b0y9w")
    .then(res => res.json())
    .then(
     result => {
      // console.log(result.quotes);
      this.setState({
       quotes: [...result.quotes]
      });
     },
     error => {
      console.log(error);
     }
    );
  }
 
  handleNewQuote = () => {
   this.setState({
    randomQuoteIndex: Math.floor(Math.random() * this.state.quotes.length)
   });
  };
 
  render() {
   return (
    <div id="container">
     <h1>Random Quote Machine</h1>
     {this.state.quotes
      .filter((val, index) => index === this.state.randomQuoteIndex)
      .map((quote, index) => (
       <div id="quote-box" key={index}>
        <div id="text">"{quote.quote}"</div>
        <div id="author">- {quote.author}</div>
        <div id="buttons-container">
         <button id="new-quote" onClick={this.handleNewQuote}>
          New Quote
         </button>
         <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text="${quote.quote}"%0A- ${quote.author}`}
          target="_blank"
         >
          Tweet Quote
         </a>
        </div>
       </div>
      ))}
    </div>
   );
  }
 } 