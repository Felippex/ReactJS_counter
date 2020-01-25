import React from "react";
// import { InputGroup } from "react-bootstrap";
import "./InputStep.css";

const StepInput = props => {
  return (
    <div>
      <p>Krok</p>
      <input
        ref={props._inputStep}
        type="number"
        onChange={props.updateStepProps}
      />
    </div>
  );
};

export default StepInput;
