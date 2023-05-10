import React from "react";
import Card from "react-bootstrap/Card";
import "./task.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/esm/Button";
import Accordion from "react-bootstrap/Accordion";
export default class Task extends React.Component {
  getPractices() {
    const url = "/practices/bytask/" + this.props.task.Task;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((practices) => {
        this.setState({ practices });
      });
  }
  state = {
    practices: [],
  };
  render() {
    return <>{this.renderOffer()}</>;
  }
  renderOffer() {
    var i = 0;
    return (
      <>
        <Card
          id="tasks"
          className="d-flex align-items-center justify-content-center"
          onClick={() => {
            if (this.props.h) {
              this.getPractices();
              var popup = document.getElementById(this.props.task.Task);
              popup.classList.add("active");
            } else {
              var popup = document.getElementById(this.props.task.Task + "no");
              popup.classList.add("active");
            }
          }}
        >
          <Container>
            <Row>
              <Col
                xs={6}
                md={4}
                id="task-title"
                className="d-flex align-items-center "
              >
                {this.props.task.Task}
              </Col>

              <Col
                xs={12}
                md={8}
                id="task-body"
                className="d-flex align-items-center justify-content-center"
              >
                {this.props.task.Description_1}
              </Col>
            </Row>
          </Container>
        </Card>
        <div id={this.props.task.Task} className="pop">
          <div className="pop-bg">
            <h4>Practices related to the task:{" " + this.props.task.Task}</h4>
            <Accordion defaultActiveKey="0">
              {this.state.practices.map((e) => {
                i++;
                if(e.Cite !== undefined){
                return (
                  <Accordion.Item eventKey={i}>
                    <Accordion.Header>{e.Practice}</Accordion.Header>
                    <Accordion.Body>{e.Description} <footer >  <a href='https://pair.withgoogle.com/guidebook'><cite title="Source"><small>{"-"+e.Cite}</small></cite></a>
                    </footer></Accordion.Body>
                    
                  </Accordion.Item>
                );}
                else{
                  return (
                    <Accordion.Item eventKey={i}>
                      <Accordion.Header>{e.Practice}</Accordion.Header>
                      <Accordion.Body>{e.Description}</Accordion.Body>
                      
                    </Accordion.Item>);
                }
              })}
            </Accordion>
            <Button
              id="close"
              onClick={() => {
                var popup = document.getElementById(this.props.task.Task);
                popup.classList.remove("active");
              }}
            >
              close
            </Button>
          </div>
        </div>
        <div id={this.props.task.Task + "no"} className="pop">
          <div className="pop-bg">
            <h4>
              Ops! The task {"``" + this.props.task.Task + '"'} doesn't have
              practices related
            </h4>
            <Button
              id="close-no"
              onClick={() => {
                var popup = document.getElementById(
                  this.props.task.Task + "no"
                );
                popup.classList.remove("active");
              }}
            >
              Try another
            </Button>
          </div>
        </div>
      </>
    );
  }
}
