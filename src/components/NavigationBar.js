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
        <Navbar className='fixed-top' color="faded" light toggleable>
          <Container>
            <NavbarToggler right onClick={this.toggle}/>
            <NavbarBrand href="/">Randy Lam</NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Skills</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Projects</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Contact</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </ Container>
        </Navbar>

      </div>
    );
  }
}

export default NavigationBar;