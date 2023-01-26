import React, { useState } from 'react';
import {
  Container,
  Navbar,
  NavbarBrand,
} from 'reactstrap';

function Header(args) {
  return (
    <Navbar {...args}>
      <Container className='text-start'>
        <NavbarBrand href="/">Zwemradar</NavbarBrand>
      </Container>
    </Navbar>
  );
}

export default Header;