import React from 'react';
import './App.css';

import { Button } from "@cloudbees/react-honeyui/Button";
import { Alert, Badge, ButtonGroup, Breadcrumb, Card, Nav, Navbar, NavDropdown} from "@cloudbees/react-honeyui";
import Search from "@cloudbees/honeyui-icons/svg/search.svg";
import Help from "@cloudbees/honeyui-icons/svg/help.svg";
import Notifications from "@cloudbees/honeyui-icons/svg/notifications.svg";

const SVG_WIDTH = 28;

function App() {
  return (
    <div className="App">



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
                  <svg
                    viewBox="0 0 512 512"
                    width={16}
                  >
                    <use xlinkHref="#check" />
                  </svg>
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
            {/*<div className="d-md-none d-flex mr-md-2 flex-fill w-100">*/}
            {/*  <button className="icon-btn flex-grow-1">*/}
            {/*    <svg width={SVG_WIDTH} viewBox={`${Notifications.viewBox}`}>*/}
            {/*      <use xlinkHref={`#${Notifications.id}`} />*/}
            {/*    </svg>*/}
            {/*  </button>*/}
            {/*  <button className="icon-btn flex-grow-1">*/}
            {/*    <svg width={SVG_WIDTH} viewBox={`${Help}`}>*/}
            {/*      <use xlinkHref={`#${Help.id}`} />*/}
            {/*    </svg>*/}
            {/*  </button>*/}
            {/*  <button className="icon-btn flex-grow-1">*/}
            {/*    <svg width={SVG_WIDTH} viewBox={`${Search.viewBox}`}>*/}
            {/*      <use xlinkHref={`#${Search.id}`} />*/}
            {/*    </svg>*/}
            {/*  </button>*/}
            {/*</div>*/}
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
                {/*<div className="d-md-none d-flex mr-md-2 flex-fill w-100">*/}
                {/*  <button className="icon-btn flex-grow-1">*/}
                {/*    <svg width={SVG_WIDTH} viewBox={`${Notifications.viewBox}`}>*/}
                {/*      <use xlinkHref={`#${Notifications.id}`} />*/}
                {/*    </svg>*/}
                {/*  </button>*/}
                {/*  <button className="icon-btn flex-grow-1">*/}
                {/*    <svg width={SVG_WIDTH} viewBox={`${Help}`}>*/}
                {/*      <use xlinkHref={`#${Help.id}`} />*/}
                {/*    </svg>*/}
                {/*  </button>*/}
                {/*  <button className="icon-btn flex-grow-1">*/}
                {/*    <svg width={SVG_WIDTH} viewBox={`${Search.viewBox}`}>*/}
                {/*      <use xlinkHref={`#${Search.id}`} />*/}
                {/*    </svg>*/}
                {/*  </button>*/}
                {/*</div>*/}
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
                    <svg
                      viewBox="0 0 512 512"
                      width={16}
                    >
                      <use xlinkHref="#check" />
                    </svg>
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

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="http://via.placeholder.com/300" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>


    </div>
  );
}

export default App;
