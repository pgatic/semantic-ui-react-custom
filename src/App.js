// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Container, Header } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Container text>
        <Header
          as="h2"
          content="Do whatever you want when you want to."
          style={{
            fontSize: "1.7em",
            fontWeight: "normal",
            marginTop: "1.5em",
          }}
        />
      </Container>
    </div>
  );
}

export default App;
