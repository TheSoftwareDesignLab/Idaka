import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as React from 'react';
import './NavigationBar.css';
import LinearProgress from '@mui/material/LinearProgress';
const NavigationBar= () => (<div >
<Navbar className='navbar-light'>
        <Container>
          <Navbar.Brand href="/"><img id="Sparck-icon"
          src="Spark-Icon.png"
          alt="Sparck"
        /> Idaka </Navbar.Brand>
          <Nav>{ 
            <Nav.Link href="/practices-filter">Practices</Nav.Link> }
            <Nav.Link href="/stages">Stages</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <LinearProgress id='progress'/>
    </div>
);

export default NavigationBar;
