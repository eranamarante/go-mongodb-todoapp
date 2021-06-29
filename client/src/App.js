import React from "react";

import { Container } from "semantic-ui-react";

import ToDoList from "./ToDoList";

const App = () => {
  return (
    <div>
      <Container>
        <ToDoList />
      </Container>
    </div>
  );
}

export default App;