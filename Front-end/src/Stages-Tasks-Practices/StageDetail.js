import React from "react";
import Task from "./Task";
import "./stageDetail.css";
import { useState } from "react";
export default function StageDetail(props) {

  let [task_selected, setTask] = useState("task");
  let tasks_with_practices= localStorage.getItem("tasksWithPractices")

  
  return (
    <>
      <div className="detail">
        <h1 id={props.number.toString()}>{props.name.Stage}</h1>
        <h5>{props.name.Description}</h5>
        <h5>-</h5>
        <h5>Tasks related to this stage {task_selected}</h5>
        <div className="contenedor-tasks" id="blur">
          {props.name.Tasks.map((e) => {
            let have=false
            if(tasks_with_practices.includes(e.Task))
            {
              have=true
            }
            return (

                <Task task={e} h={have} ></Task>

            );
          })}
        </div>
      </div>
      
    </>
  );
}
