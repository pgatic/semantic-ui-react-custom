// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Header, Segment, Form } from "semantic-ui-react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleSubmit = () => {
    console.log("clicked");
    setTodos([...todos, todo]);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setTodo(e.target.value);
  };
  console.log(todo);
  return (
    <div className="App">
      <Segment style={{ maxWidth: "60rem", margin: "auto" }}>
        <Header color="green" as="h3" textAlign="center">
          TODO LIST
        </Header>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder="Enter new todo"
              name="todo"
              value={todo}
              onChange={handleChange}
            />
            <Form.Button content="Add to list" />
          </Form.Group>
        </Form>
      </Segment>
    </div>
  );
}

export default App;
