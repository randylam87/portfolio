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
      <div>
        <Container>
          <Navbar className='fixed-top' toggleable id='navigation'> 
            <NavbarToggler right onClick={this.toggle}/>
            <NavbarBrand href="/" className='page-title'>Randy Lam</NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className='page-title' href="#about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='page-title' href="#skills">Skills</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='page-title' href="#projects">Projects</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='page-title' href="#contact">Contact</NavLink>
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