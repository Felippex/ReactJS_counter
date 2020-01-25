import React, { Component } from "react";
import "./Counter.css";
import { Card } from "react-bootstrap";
// import StepInput from "./inputStep/InputStep";
import ButtonThree from "./button/Button";

class Counter extends Component {
  constructor(props) {
    super(props);
    let number = 0;
    if (isNaN(this.props.value) === false) {
      number = parseInt(this.props.value);
    } else {
      alert("to nie jest liczba");
    }

    this.state = {
      counterView: number,
      inputStep: 0
    };
  }

  resetCounter = () => {
    this.setState({
      counterView: 0
    });
  };
  updateStep = () => {
    this.setState({
      inputStep: parseInt(this.inputStep.value)
    });
  };
  addSteptoCounter = () => {
    console.log(this._inputStep.value);

    this.setState({
      counterView: this.state.counterView + parseInt(this._inputStep.value),
      inputStep: this._inputStep.value
    });
  };

  resetToInitialValue = () => {
    this.setState({
      counterView: parseInt(this.props.value)
    });
  };

  // funkcja render "publikuje" kod
  render() {
    return (
      <div className="main-div">
        <Card className="my-card">
          <Card.Body>
            {`${this.props.name}, wartość równa: ${this.state.counterView} ${this.state.napisView}`}
          </Card.Body>
          <ButtonThree
            resetCounterProps={this.resetCounter}
            addSteptoCounterProps={this.addSteptoCounter}
            resetToInitialValueProps={this.resetToInitialValue}
          />
          <p className="step">Krok: </p>
          <input
            type="number"
            ref={data => {
              this._inputStep = data;
            }}
            value={this.state._inputStep}
          />
        </Card>
      </div>
    );
  }
}

// render musi być ostatni w klasie

export default Counter;
