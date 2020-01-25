import React from 'react';
import { Container} from 'reactstrap';

// Components
import Nav from './Nav';

function Header() {
   return (
      <header>
         <Container>
            <Nav />
            <div className="intro">
               <h1>Hi, I'm <span>Kerri-Ann Bates</span>.</h1>
               <h2>Full-Stack Developer</h2>
            </div>
         </Container>
      </header>
   )
}

export default Header
