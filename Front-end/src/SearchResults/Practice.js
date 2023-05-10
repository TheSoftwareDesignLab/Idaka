
import React from 'react';
import Card from 'react-bootstrap/Card';
import './practice.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import Col from 'react-bootstrap/Col';
export default class Practice extends React.Component {
  rate(rate){
    if(rate==1){
      var change = document.getElementsByClassName("dislike")[this.props.number-1];
    change.setAttribute("src","AbajoOff.png")
    var change1 = document.getElementsByClassName("like")[this.props.number-1];
    change1.setAttribute("src","ArribaOn.png")
    }
    else{
      var change1 = document.getElementsByClassName("like")[this.props.number-1];
      change1.setAttribute("src","ArribaOFF.png")
      var change = document.getElementsByClassName("dislike")[this.props.number-1];
    change.setAttribute("src","AbajoOn.png")
    }
    const query = {
      id: localStorage.getItem("resp post"),
      rate: rate,
      position: this.props.number
  
    }
    const postQ = {
    method: "PUT",
    body: JSON.stringify(query),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  fetch("/queries/rate", postQ)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log('resp post',JSON.stringify(data));
    })
    .catch((error) => {
      console.log("caught", error.message);
    });}
  state = {
    "name": this.props.name

  }
render() {
    return (
<>
        {this.renderOffer()}
        </>
    );
  }
  renderOffer(){
    if(this.state.name.Cite !== undefined)
   { return (   
                <Accordion  id='search-practice' >
        <Accordion.Item eventKey={this.props.eventKey} > 
      <Accordion.Header><Container><Row><Col sm="2"><h4>{this.props.number}</h4></Col><Col id="practice-title">{this.state.name.Practice}</Col></Row></Container></Accordion.Header>
      <Accordion.Body id='practice-body'>
      {this.state.name.Description}
      <footer >  <a href='https://pair.withgoogle.com/guidebook'><cite title="Source"><small>{"-"+this.state.name.Cite}</small></cite></a>
                    </footer>
      <br></br>
      <br></br> 
      <Row>
      <Col>
      <Card id="card-task">{this.state.name.Task}</Card></Col>
      <Col sm="3"><div id='likes'><img className='dislike'
          src="AbajoOff.png"
          onClick={() => {
            this.rate(0)
          }}
          alt="dislike"
        />
        <img className='like'
          src="ArribaOFF.png"
          onClick={() => {
            this.rate(1)
          }}
          alt="like"
        /></div></Col></Row>
      </Accordion.Body>
      </Accordion.Item>        </Accordion>

    );}
    else{
      return (   
        <Accordion  id='search-practice' >
<Accordion.Item eventKey={this.props.eventKey} > 
<Accordion.Header><Container><Row><Col sm="2"><h4>{this.props.number}</h4></Col><Col id="practice-title">{this.state.name.Practice}</Col></Row></Container></Accordion.Header>
<Accordion.Body id='practice-body'>
{this.state.name.Description}
<Row>
<Col>
<Card id="card-task"sm="9">{this.state.name.Task}</Card></Col>
<Col sm="3"><div id='likes'><img className='dislike'
  src="AbajoOff.png"
  onClick={() => {
    this.rate(0)
  }}
  alt="1"
/>
<img className='like'
  src="ArribaOFF.png"
  onClick={() => {
    this.rate(1)
  }}
  alt="5"
/></div></Col></Row>
</Accordion.Body>
</Accordion.Item>        </Accordion>

);
    }
  }
}
