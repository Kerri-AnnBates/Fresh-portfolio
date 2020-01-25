import React from 'react'
import { Container} from 'reactstrap';

function Nav() {
   return (
      <nav>
         <Container>
            <div className="logo">
               Logo
            </div>
            <ul>
               <li><a href="#">Home</a></li>
               <li><a href="#">About</a></li>
               <li><a href="#">Projects</a></li>
               <li><a href="#">Contact</a></li>
            </ul>
         </Container>
      </nav>
   )
}

export default Nav
