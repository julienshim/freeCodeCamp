import React from 'react';

export default class JavaScriptCalculator extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
    display: '0',
    buttons: [
      { id: "clear", value: "ac".toUpperCase() },
      { id: "plus-minus", value: "+/-" },
      { id: "percent", value: "%" },
      { id: "divide", value: "/" },
      { id: "seven", value: "7" },
      { id: "eight", value: "8" },
      { id: "nine", value: "9" },
      { id: "multiply", value: "x" },
      { id: "four", value: "4" },
      { id: "five", value: "5" },
      { id: "six", value: "6" },
      { id: "subtract", value: "-" },
      { id: "one", value: "1" },
      { id: "two", value: "2" },
      { id: "three", value: "3" },
      { id: "add", value: "+" },
      { id: "zero", value: "0" },
      { id: "decimal", value: "." },
      { id: "equals", value: "=" }],
      operatorPressedLast: true,
      isMinus: false,
      calcBank: [],
      master: 0,
      test: []
    }
  }

  handleDisplayUpdate = (input) => {
    this.setState({
      display: this.state.display === "0" || this.state.operatorPressedLast ? 
               `${input}` : 
               this.state.display += input,
      operatorPressedLast: false
    })
  }

  handlePlusMinus() {
    const newDisplay = -parseFloat(this.state.display, 10);
    this.setState({
      display: String(newDisplay)
    })
  }

  handleClear() {
    this.setState({
      display: '0',
      calcBank: [],
      master: 0
    })
  }

  handleOperatorPressed(input) {
    this.setState(prevState => ({
      calcBank: prevState.operatorPressedLast  ? 
                input === "-" ? prevState.calcBank : prevState.calcBank.splice(0, prevState.calcBank.length-1).concat(input) : 
                prevState.calcBank[0] === String(prevState.master) ? prevState.calcBank.concat(input) : prevState.calcBank.concat(prevState.display, input),
      operatorPressedLast: true,
      isMinus: input === "-" ? 
      this.state.operatorPressedLast ? true : false : 
      false
    }), () =>  {
      this.state.calcBank.length >= 4 && this.handleOrderOfOperations(this.state.calcBank);
    })
  }

  handleOrderOfOperations(input) {
    let calculation = [];
    const [num1, op1, num2, op2, num3, op3] = input;
    switch(input.length) {
      case 4:
        // if op1 equals multiply
        calculation = [this.handleCalculate([num1, op1, num2]), op2]
        // if op1 equals divide
        calculation = [this.handleCalculate([num1, op1, num2]), op2]
        // if op1 equals add
            // if op2 equals add or subtract
            calculation = [num1, op1, num2, op2]
            // if op2 equals multiply or divide
            calculation = [num1, op1, num2, op2]
        // if op1 equals subtractk
            // if op2 equals add or subtract
            calculation = [num1, op1, num2, op2]
            // if op2 equals multiply or divide
            calculation = [num1, op1, num2, op2]
        this.setState({
          calcBank: calculation
        })
        break;
      case 5:
        calculation = [num1, op1, num2, op2, num3] // think of equal here
      case 6: 
        calculation = [num1, op1, num2, op2, num3, op3] // think of equal here
        break;
      default: 
        console.log("should be possible");
    }
 
    
  }

  handleCalculate(input) {
    let calculation = undefined;
    const base = this.state.isMinus ? 
                 -parseFloat(this.state.display) : 
                 parseFloat(this.state.display);
    switch (input[1]) {
      case "/":
        calculation = parseFloat(input[0]) / base;
        this.handleUpdate(calculation)
        break;
      case "x":
        calculation = parseFloat(input[0]) * base;
        this.handleUpdate(calculation)
        break;
      case "-":
        calculation = parseFloat(input[0]) - base;
        this.handleUpdate(calculation)
        break;
      case "+":
        calculation = parseFloat(input[0]) + base;
        this.handleUpdate(calculation)
        break;
      default:
        console.log("No operators");
    }
    return String(calculation);
  }

  handleUpdate(input) {
    this.setState({
      calcBank: [input],
      master: input,
      display: input
    })
  }

  handleClick = (event) => {
    event.preventDefault()
    const input = event.target.innerHTML;
    switch (true) {
      case /[0-9]/g.test(input):
        this.handleDisplayUpdate(input);
        this.setState({
          operatorPressedLast: false
        })
        break;
      case /\+\/\-/g.test(input):
        this.handlePlusMinus();
        break;
      case /[-+x/]/g.test(input):
        this.handleOperatorPressed(input);
        break;
      case /AC/g.test(input):
        this.handleClear();
        break;
      case /%/g.test(input):
        console.log('Percent', input);
        break;
      case /\./g.test(input):
        this.state.display.indexOf('.') === -1 && this.handleDisplayUpdate(input);
        break;
      case /\=/g.test(input):
        this.handleUpdate(String(this.handleCalculate(this.state.calcBank)));
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