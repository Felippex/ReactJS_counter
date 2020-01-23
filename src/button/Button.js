import React from "react";
import { Button } from "react-bootstrap";
import "./Button.css";

const ButtonThree = props => {
  return (
    <div>
      <Button
        className="main-button"
        variant="primary"
        onClick={props.addOnetoCounterProps}
      >
        Dodaj krok
      </Button>
      <Button
        className="main-button"
        variant="warning"
        onClick={props.resetToInitialValueProps}
      >
        Reset do wartości poczatkowej{" "}
      </Button>
      <Button
        className="main-button"
        variant="danger"
        onClick={props.resetCounterProps}
      >
        Reset do 0
      </Button>
    </div>
  );
};

export default ButtonThree;
