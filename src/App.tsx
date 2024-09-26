import React from 'react';
import './App.css';

import { Button } from "@cloudbees/react-honeyui/Button";
import { Alert } from "@cloudbees/react-honeyui/Alert";
import { Badge } from "@cloudbees/react-honeyui/Badge";
import { Card } from "@cloudbees/react-honeyui/Card";
//import { Nav } from "@cloudbees/react-honeyui/Nav";
//import { Navbar } from "@cloudbees/react-honeyui/Navbar";
//import { NavDropdown } from "@cloudbees/react-honeyui/NavDropdown";
import {
  //Alert,
  //Badge,
  //Button,
  ButtonGroup,
  Breadcrumb,
  //Card,
  Combobox, IOption,
  Nav,
  Navbar,
  NavDropdown,
  ProgressBar,
  Spinner
} from "@cloudbees/react-honeyui";
import { ReactComponent as Search} from "@cloudbees/honeyui-icons/svg/search.svg";
import { ReactComponent as Help} from "@cloudbees/honeyui-icons/svg/help.svg";
import { ReactComponent as Notifications} from "@cloudbees/honeyui-icons/svg/notifications.svg";
import { ReactComponent as Check} from "@cloudbees/honeyui-icons/solid/check.svg";


import { ReactComponent as Close} from "@cloudbees/honeyui-icons/svg/close.svg";


import close from "@cloudbees/honeyui-icons/svg/close.svg";

const SVG_WIDTH = 28;

const aLotOfOptions: IOption[] = [
  { key: "1", value: "", children: <span>Hello</span> },
  { key: "2", value: "value-2", label: "Option 2", children: <span>{"Option 2"}</span> },
  { key: "3", value: "value-3", label: "Option 3", children: <span>{"Option 3"}</span> },
  { key: "4", value: "value-4", label: "Option 4", children: <span>{"Option 4"}</span> },
  { key: "5", value: "value-5", label: "Option 5", children: <span>{"Option 5"}</span> }
];

function App() {
  return (
    <div className="App">


          This icon from honeyui-icons using sprite syntax is not displayed!!!
          <span className="bg-primary">
            <svg width={24} viewBox={`${(close as any).viewBox}`}>
              <use xlinkHref={`#${(close as any).id}`} />
            </svg>
          </span>


      <Navbar
        expand="md"
        variant="dark"
      >
        <div className="d-flex">
          <Navbar.AppSwitcher id="app-switcher">
            <NavDropdown.Item>
              Test 1
            </NavDropdown.Item>
            <NavDropdown.Item>
              Test 2
            </NavDropdown.Item>
            <NavDropdown.Item>
              Test 3
            </NavDropdown.Item>
          </Navbar.AppSwitcher>
          <Navbar.Brand href="/~new/home">
            <div className="org">
              CloudBees
            </div>
            <div className="capability">
              Capability
            </div>
          </Navbar.Brand>
        </div>
        <div className="ml-auto d-flex">
          <Navbar.UserDropdown
            className="ml-auto d-md-none d-flex"
            id="user-menu"
            title={<Navbar.Username description="Optional description" initials="AV" name="User name"/>}
          >
            <NavDropdown.Item>
              <div className="d-flex align-items-center">
                <div>
                  Selected
                </div>
                <div className="ml-auto">
                  <Check width={16}/>
                  <Close width={16}/>
                </div>
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item>
              Default
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              Create Organization
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              Organization Settings
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Header>
              User Menu
            </NavDropdown.Header>
            <NavDropdown.Divider />
            <NavDropdown.Item disabled>
              Disabled
            </NavDropdown.Item>
          </Navbar.UserDropdown>
          <Navbar.Toggle aria-controls="navbarScroll" />
        </div>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="">
            <div className="d-md-none d-flex mr-md-2 flex-fill w-100">
              <button className="icon-btn flex-grow-1">
                <Notifications width={SVG_WIDTH}/>
              </button>
              <button className="icon-btn flex-grow-1">
                <Help width={SVG_WIDTH} />
              </button>
              <button className="icon-btn flex-grow-1">
                <Search width={SVG_WIDTH} />
              </button>
            </div>
            <Nav.Link href="#home">
              Home
            </Nav.Link>
            <NavDropdown
              id="navbarScrollingDropdown"
              title="Dropdown"
            >
              <NavDropdown.Item href="/">
                Action 1
              </NavDropdown.Item>
              <NavDropdown.Item href="/">
                Action 2
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              disabled
              id="navbarScrollingDropdown"
              title="Disabled"
            >
              <NavDropdown.Item href="#action3">
                Action
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ml-sm-auto d-flex">
            <div className="navbar-utilities flex-column flex-md-row">
              <div className="order-2 m-3 order-md-1 d-flex">
                <Badge variant="white">
                  White badge
                </Badge>
                <Badge variant="outline-white">
                  Outline badge
                </Badge>
              </div>
              <div className="d-none order-md-2 d-md-flex mr-md-2 flex-fill w-100">
                <button className="icon-btn flex-grow-1">
                  <Notifications width={SVG_WIDTH}/>
                </button>
                <button className="icon-btn flex-grow-1">
                  <Help width={SVG_WIDTH} />
                </button>
                <button className="icon-btn flex-grow-1">
                  <Search width={SVG_WIDTH} />
                </button>
              </div>
              <div className="order-3 m-2 d-flex">
                <Button
                  onClick={function noRefCheck() {}}
                  variant="primary"
                >
                  Action
                </Button>
                <Button
                  onClick={function noRefCheck() {}}
                  variant="outline-light"
                >
                  Action
                </Button>
              </div>
            </div>
            <Navbar.UserDropdown
              className="d-md-flex d-none ml-md-auto"
              id="user-menu"
              title={<Navbar.Username description="Optional description" initials="AV" name="User name"/>}
            >
              <NavDropdown.Item>
                <div className="d-flex align-items-center">
                  <div>
                    Selected
                  </div>
                  <div className="ml-auto">
                    <Check width={16}/>
                    <Close width={16}/>
                  </div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item>
                Default
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                Create Organization
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                Organization Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Header>
                User Menu
              </NavDropdown.Header>
              <NavDropdown.Divider />
              <NavDropdown.Item disabled>
                Disabled
              </NavDropdown.Item>
            </Navbar.UserDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


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

      <div className={"container"}>
        <Card>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>

        <Card className={"mb-3"} style={{ width: '18rem' }}>
          <Card.Img variant="top" src="http://via.placeholder.com/300" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>

            <Combobox
              className={"mb-3"}
              clearable
              placeholder="Search here!"
              options={aLotOfOptions}
              defaultValue={[aLotOfOptions[0]]}
              onChange={(v) => console.log("Value", v)}
            />

            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <ProgressBar className={"mb-3"} now={25} />

        <div className={"mb-3"}>
          <Spinner animation="border" size="sm" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
          <Spinner animation="border" variant="light" size="sm" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
          <Spinner animation="border" variant="light" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>


      </div>

    </div>
  );
}

export default App;
