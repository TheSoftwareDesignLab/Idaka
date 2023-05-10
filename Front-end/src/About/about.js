
import React from "react";
import './about.css'
import Card from "react-bootstrap/Card";
import Sparck from "../Sparck/Sparck";
export default function About() {

  return (
    <div id='content-about'>
        <h1 id="about-title">About Idaka</h1>
        <p id="about-p">Idaka is an information retrieval system that seeks to help developers to include good practices while building ML-enabled systems. </p>
        <h3 id="team-title">Our team</h3>
        <div className="contenedor-team">
        <Card> <img
          src="Laura.jpeg"
          onClick={() => {
          }}
          alt="Laura Helena Cabra Acela"
          className="img-team"
        /> <Card.Body>
        <Card.Title>Laura Helena Cabra Acela</Card.Title>
        <Card.Text>
        <small>lh.cabra@uniandes.edu.co</small>
        <br></br><small>Thesis student</small>
        <dl>
  <dt>Systems and Computing Engineering student, Universidad de los Andes, Colombia</dt></dl></Card.Text>
      </Card.Body></Card>
        <Card> <img
          src="Ana.png"
          onClick={() => {
          }}
          alt="Anamaría Irmgard Mojica Hanke"
          className="img-team"
        /> <Card.Body>
        <Card.Title>Anamaría Irmgard Mojica Hanke</Card.Title>
        <Card.Text>
        <small>ai.mojica10@uniandes.edu.co</small>
        <br></br><small>Co-advisor</small>
        <dl>
  <dt>M.Sc Information Engineering, Universidad de los Andes, Colombia</dt>
  <dt>B.Sc Systems and Computing Engineering, Universidad de los Andes, Colombia</dt></dl>
        

        </Card.Text>
      </Card.Body></Card>
      <Card> <img
          src="Mario.jpg"
          onClick={() => {
          }}
          alt="Mario Linares Vásquez"
          className="img-team"
        /> <Card.Body>
        <Card.Title>Mario Linares Vásquez</Card.Title>
        <Card.Text>
        <small>m.linaresv@uniandes.edu.co</small>
        <br></br><small>Adviser</small>
        <dl>
  <dt>Ph.D Computer Science, College of William and Mary, USA.</dt>
<dt>M.Sc Systems and Computing Engineering, Universidad Nacional, Colombia</dt>        
<dt>B.Sc Systems and Computing Engineering, Universidad Nacional, Colombia</dt></dl>
        </Card.Text>
      </Card.Body></Card>
      <Card> <img
          src="Andres.jpeg"
          onClick={() => {
          }}
          alt="Andrés Castellanos Molina"
          className="img-team"
        /> <Card.Body>
        <Card.Title>Andrés Castellanos Molina</Card.Title>
        <Card.Text>
        <small>ca-andres@javeriana.edu.co</small>
        <br></br><small>Icons and logo designer</small>
        <dl>
  <dt>Industrial design student, Universidad Javeriana, Colombia</dt>
</dl> </Card.Text>
      </Card.Body></Card>
        </div>
        
      <Sparck message='This is my team!' time={5000}></Sparck>
    </div>
  );
}
