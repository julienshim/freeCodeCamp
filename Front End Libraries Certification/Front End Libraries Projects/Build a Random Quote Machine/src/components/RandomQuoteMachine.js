import React from "react";

const Title = props => {
  const { handleColorChange, title, isInverted } = props;
  const titleClass = isInverted ? "titleInverted" : "title"
  return (
    <h1 id="title" className={titleClass} onClick={handleColorChange}>
      {title}
    </h1>
  );
};

const SocialMediaButtons = props => {
  const { handleNewQuote, quote, isInverted } = props;
  const fill = isInverted ? "#fff" : "#000";
  return (
    <div id="buttons-container">
      <button id="new-quote" onClick={handleNewQuote}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill={fill}
          viewBox="0 0 24 24"
        >
          <path d="M9 12l-4.463 4.969-4.537-4.969h3c0-4.97 4.03-9 9-9 2.395 0 4.565.942 6.179 2.468l-2.004 2.231c-1.081-1.05-2.553-1.699-4.175-1.699-3.309 0-6 2.691-6 6h3zm10.463-4.969l-4.463 4.969h3c0 3.309-2.691 6-6 6-1.623 0-3.094-.65-4.175-1.699l-2.004 2.231c1.613 1.526 3.784 2.468 6.179 2.468 4.97 0 9-4.03 9-9h3l-4.537-4.969z" />
        </svg>
      </button>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text="${quote.quoteKR}"%0A- ${
          quote.authorKR
        }`}
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill={fill}
          viewBox="0 0 24 24"
        >
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      </a>
    </div>
  );
};

export default class RandomQuoteMachineApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomQuoteIndex: 0,
      quotes: [],
      isInverted: false,
      backgroundColor: "white",
      color: "black",
      title: "랜덤 명언 제조기"
    };
  }

  componentDidMount() {
    fetch("https://api.myjson.com/bins/myh5e")
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
    {
      /*this.state.quotes.length-1 because myjson.com corrupts the last item*/
    }
    this.setState({
      randomQuoteIndex: Math.floor(Math.random() * this.state.quotes.length)
    });
  };

  handleColorChange = () => {
    this.setState(prevState => ({
      backgroundColor:
        this.state.backgroundColor === "black" ? "white" : "black",
      color: this.state.backgroundColor === "black" ? "white" : "black",
      title:
        this.state.title === "Random Quote Machine"
          ? "랜덤 명언 제조기"
          : "Random Quote Machine",
      isInverted: !prevState.isInverted
    }));
  };

  render() {
    const style = {
      backgroundColor: this.state.backgroundColor,
      color: this.state.color
    };

    return (
      <div id="container" className={"disable-selection"} style={style}>
        <div id="content">
          <Title
            handleColorChange={this.handleColorChange}
            title={this.state.title}
            isInverted={this.state.isInverted}
          />
          {this.state.quotes
            .filter((val, index) => index === this.state.randomQuoteIndex)
            .map((quote, index) => (
              <div id="quote-box" key={index}>
                <SocialMediaButtons
                  isInverted={this.state.isInverted}
                  handleNewQuote={this.handleNewQuote}
                  quote={quote}
                />
                <div
                  style={{ color: this.state.isInverted ? "white" : "black" }}
                  id="text"
                >
                  {quote.quoteKR}
                </div>
                <div
                  style={{ color: this.state.isInverted ? "white" : "black" }}
                  id="author"
                >
                  - {quote.authorKR}
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
