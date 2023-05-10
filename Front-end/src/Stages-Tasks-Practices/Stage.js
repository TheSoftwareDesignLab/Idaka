
import React from 'react';
import Card from 'react-bootstrap/Card';
import './stage.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default class Stage extends React.Component {

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
    return (   
      <a href={"#"+this.props.det}>
      <Card style={{ width: '18rem' }} className="text-center" id="stage" >
      <Card.Body className="d-flex align-items-center justify-content-center" id="stage-body">
        <Col><Row className='justify-content-center'>
      <img className='stages-img'
          src={this.props.number+"stage.png"}
          alt={this.state.name.Stage}
        /></Row><Row className='justify-content-center'>
        {this.props.number+"-"+this.state.name.Stage}</Row></Col>
        </Card.Body>
        </Card>
        </a>
    );
  }
}
