import React from 'react';

export default class JavaScriptCalculator extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
    display: '0',
    buttons: [
      { 
        id: "clear",
        value: "ac".toUpperCase()
        },
      { 
        id: "plus-minus",
        value: "+/-"
      },
      { 
        id: "percent",
        value: "%"
      },
      { 
        id: "divide",
        value: "/"
      },
      { 
        id: "seven",
        value: "7"
      },
      { 
        id: "eight",
        value: "8"
      },
      { 
        id: "nine",
        value: "9"
      },
      { 
        id: "multiply",
        value: "x"
      },
      { 
        id: "four",
        value: "4"
      },
      { 
        id: "five",
        value: "5"
      },
      { 
        id: "six",
        value: "6"
      },
      { 
        id: "subtract",
        value: "-"
      },
      { 
        id: "one",
        value: "1"
      },
      { 
        id: "two",
        value: "2"
      },
      { 
        id: "three",
        value: "3"
      },
      { 
        id: "add",
        value: "+"
      },
      { 
        id: "zero",
        value: "0"
      },
      { 
        id: "decimal",
        value: "."
      },
      { 
        id: "equals",
        value: "="
      }]
    }
  }
  handleDisplayUpdate = (input) => {
    this.setState({
      display: this.state.display === "0" ? `${input}` : this.state.display += input
    })
  }


  handleClick = (event) => {
    event.preventDefault()
    const input = event.target.innerHTML;
    switch (true) {
      case /[0-9]/g.test(input):
        console.log('Number', input);
        break;
      case /\+\/\-/g.test(input):
        console.log('Plus Minus', input);
        break;
      case /[-+x/]/g.test(input):
          console.log('Operator', input);
          break;
      case /AC/g.test(input):
        console.log('Clear', input);
        break;
      case /\./g.test(input):
        console.log('Decimal', input);
        break;
      case /\=/g.test(input):
        console.log('Equal', input);
        break;
      default:
        console.log('Uh oh something went wrong');
    }
  }

  render() {


   return (
    <div id="javascript-calculator">
      <div id="display">
        {this.state.display}
      </div>
      <div id="buttons">
        { this.state.buttons.map(button => {
          return <div key={button.id} id={button.id} className={"buttons"} onClick={this.handleClick}>{button.value}</div>
        })}
      </div>
    </div>
   )
 }
}