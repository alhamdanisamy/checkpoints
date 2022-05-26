import React,{ component } from "react";
import { Navbar,Nav,Container } from "react-bootstrap";
import propTypes from "prop-types";
export default class Header extends component {
   constructor(props) {
       super(props);
   }
   render(){
       return(
        <header>
        <Navbar className="bg-black" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img src="/fakelogo.png" width="130" height="50" alt="logo" />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#team">Team</Nav.Link>
              <Nav.Link href="#team">{this.props.hello}</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
       );
   };
  
};
Header.defaultProps = {
    hello: "hey "
  };

