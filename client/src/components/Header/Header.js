import React from "react";
import { Jumbotron, Container } from "reactstrap";

// This is the header for all pages except the Home page!

const Header = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Welcome To TossUp</h1>
          <p className="lead">Please Log in !</p>
          <InputGroup>
            <Input placeholder="username" />
            <InputGroupAddon addonType="append">
              <InputGroupText>@example.com</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Container>
      </Jumbotron>
      </div>
    )};

export default Header;
