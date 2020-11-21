// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Container, Step } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Container style={{ marginBottom: "300px" }}>
        <Step.Group fluid>
          <Step
            icon="plane"
            title="Shipping"
            description="Choose your shipping options"
          />
          <Step
            active
            icon="dollar"
            title="Billing"
            description="Enter billing information"
          />
          <Step
            disabled
            icon="info circle"
            title="Confirm Order"
            description="Verify order details"
          />
        </Step.Group>
      </Container>
    </div>
  );
}

export default App;
