import React, {Component} from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this
      .toggle
      .bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className='navigation'>
        <Container>
          <Navbar className='fixed-top' color="faded" light toggleable>
            <NavbarToggler right onClick={this.toggle}/>
            <NavbarBrand href="/">Randy Lam</NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#skills">Skills</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#projects">Projects</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#contact">Contact</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </ Container>
      </div>
    );
  }
}

export default NavigationBar;