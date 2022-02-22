import React from 'react';
import './App.css';

//import { Button } from "@cloudbees/react-honeyui/Button";
import { Alert, Badge, Button, ButtonGroup, Breadcrumb } from "@cloudbees/react-honeyui";

function App() {
  return (
    <div className="App">

      <Alert variant="info">
        A simple info alert — check it out!
      </Alert>

      <Breadcrumb sidebar={true} >
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/">Library</Breadcrumb.Item>
        <Breadcrumb.Item active={true}>Data</Breadcrumb.Item>
      </Breadcrumb>


      <Badge variant="outline-primary">Badge</Badge>
      <Badge square dismissible>Badge action</Badge>

      <Button>HoneyUI Button</Button>


      <ButtonGroup aria-label="Basic example">
        <Button>Primary</Button>
        <Button active>Active</Button>
        <Button>Primary</Button>
      </ButtonGroup>

    </div>
  );
}

export default App;
