import React from 'react';
import { Container, Button } from 'reactstrap';

// Components
import Nav from './Nav';

function Header() {
   return (
      <header>
         <Nav />
         <Container>
            <div className="intro">
               <h1>Hi, I'm <span>Kerri-Ann Bates</span>.</h1>
               <h2>Full-Stack Developer</h2>
               <Button color="primary" size="md">See Projects</Button>
            </div>
         </Container>
      </header>
   )
}

export default Header
