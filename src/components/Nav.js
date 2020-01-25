import React from 'react'
import { Container } from 'reactstrap';

function Nav() {
   return (
      <nav className="sticky">
         <Container>
            <div className="nav-wrapper">
               <div className="logo">
                  <p>Logo</p>
               </div>
               <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Projects</a></li>
                  <li><a href="#">Contact</a></li>
               </ul>
            </div>
         </Container>
      </nav>
   )
}

export default Nav
