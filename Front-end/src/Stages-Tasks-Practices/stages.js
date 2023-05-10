

import "./stages.css";
import React from "react";
import Stage from "./Stage";
import StageDetail from "./StageDetail";
import Sparck from "../Sparck/Sparck";
import Button from 'react-bootstrap/Button';
export default class Stages extends React.Component {
  componentDidMount() {
    var progress = document.getElementById("progress");
    progress.classList.add("charge");
    const url = "/stages";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((stages) => {
        fetch("/tasksWithPractices")
      .then((res) => {
        return res.json();
      })
      .then((tasks) => {
        let temp=[]
        for(let t=0;t<tasks.length;t++){
         temp.push(tasks[t].Task);
       }
       localStorage.setItem("tasksWithPractices",temp)
       this.setState( {stages});
       var progress = document.getElementById("progress");
       progress.classList.remove("charge");
      });
      });
      
  }

  state = {
    stages: [],
    tasks:[]
  };

  render() {
    var i = -1;
    var j = -2;
    return (
      <div>
      <h1 id="title-stages">ML pipeline stages</h1>
      <div className="contenedor-stages">
        {this.state.stages.map((e) => {
          i = i + 1;
          return <Stage name={e} eventKey={i.toString()} number={i + 1} det={i}/>;
        })}
      </div>
      <div className="contenedor-stageDetail" >
        {this.state.stages.map((e) => {
          j = j + 1;
          return <div id={j+1} className="stage-detail"><StageDetail name={e} eventKey={i.toString()} number={(i + 1).toString()} /></div>;
        })}
      </div>
      <Sparck message="Here you can find the details of the ML pipeline stages, the related tasks and their corresponding practices." time={15000}/>
      <Button id="scroll-up" href="#title-stages">
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="white"><path d="m14.1 36.75-2.1-2.1 12-12 12 12-2.1 2.1-9.9-9.9Zm0-12.65L12 22l12-12 12 12-2.1 2.1-9.9-9.9Z"/></svg>
      </Button>
      </div>
    );
  }
}
