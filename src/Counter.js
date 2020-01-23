import React, { Component } from "react";
import "./Counter.css";
import { Card } from "react-bootstrap";
import StepInput from "./inputStep/InputStep";
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

    let napis = "";
    if (this.props.test === undefined) {
      napis = "";
    } else {
      napis = this.props.test;
    }
    // let step = this._inputStep.value;
    this.state = {
      counterView: number,
      napisView: napis
    };
  }

  resetCounter = () => {
    this.setState({
      counterView: 0
    });
  };
  updateStep = () => {
    this.setState({});
  };
  addOnetoCounter = () => {
    this.setState({
      counterView: this.state.counterView + 1
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
      <div>
        <Card>
          <Card.Body>
            {`${this.props.name}, wartość równa: ${this.state.counterView} ${this.state.napisView}`}
          </Card.Body>
          <ButtonThree
            resetCounterProps={this.resetCounter}
            addOnetoCounterProps={this.addOnetoCounter}
            resetToInitialValueProps={this.resetToInitialValue}
          />
          <StepInput
            ref={data => {
              this._inputStep = data;
            }}
            updateStepProps={this.updateStep}
          />
        </Card>
      </div>
    );
  }
}

// render musi być ostatni w klasie

export default Counter;
