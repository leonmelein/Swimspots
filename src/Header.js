import React from 'react';
import {
  Container,
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import './Header.css';

export default function Header(args) {
  return (
    <Navbar {...args}>
      <Container className='text-start'>
        <NavbarBrand href="/">Let's Go Swim</NavbarBrand>
      </Container>
    </Navbar>
  );
}
