import Form from "react-bootstrap/Form";

import "./practices-filter.css";
import React from "react";
import PracticeFilter from "./PracticeFilter";
import Accordion from "react-bootstrap/Accordion";
import { useState, useEffect } from "react";
import Sparck from "../Sparck/Sparck";
export default function PracticesTask() {
  let [state, setState] = useState([]);
  let [tasks, setTasks] = useState([]);
  let [stage, setStage] = useState();
  let [selected_stage, setSelectedstage] = useState("Practices");
  let [newPractices, setNewPractices] = useState([]);
  let [allPractices, setAllPractices] = useState([]);
  let [count, setCount] = useState(0);
  useEffect(() => {
    var progress = document.getElementById("progress");
    progress.classList.add("charge");
    fetch("/stages")
      .then((res) => {
        return res.json();
      })
      .then((stages) => {
        setStage(stages);
        getAllPractices();
      });
  }, []);
  const handleChange = (event) => {
    const url = "/practices/bytask/" + event.target.value;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((practices) => {
        setNewPractices(practices);
        if (event.target.checked) {
          var res = [];
          if (count != 0) {
            res = state;
          }

          for (let p = 0; p < practices.length; p++) {
            res.push(practices[p]);
          }
          setCount(count + 1);
        } else {
          if (count == 1) {
            res = allPractices;
          } else {
            var temp = state;
            var res = [];
            var pract = [];
            for (let pr = 0; pr < practices.length; pr++) {
              pract.push(practices[pr]._id);
            }
            for (let t = 0; t < temp.length; t++) {
              if (!pract.includes(temp[t]._id)) {
                res.push(temp[t]);
              }
            }
          }

          setCount(count - 1);
        }
        setState(res);
      });
  };
  function selectStage(stage) {
    setSelectedstage("Practices for " + stage.Stage);
    setTasks(stage.Tasks);
  }
  function getAllPractices() {
    const url = "/practices";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((practices) => {
        setAllPractices(practices);
        setState(practices);
        var progress = document.getElementById("progress");
        progress.classList.remove("charge");
      });
  }
  var i = -1;
  var j = 0;
  let ke = 0;
  let validTasks = localStorage.getItem("tasksWithPractices");
  return (
    <div id="cont">
      <div className="filter">
        {stage &&
          stage.map((e) => {
            ke++;
            return (
              <>
                {/* 
            <>-------------------------</> */}
                <Accordion defaultActiveKey="1">
                  <Accordion.Item eventKey={ke}>
                    <Accordion.Header>
                      <h6>{e.Stage}</h6>
                    </Accordion.Header>
                    <Accordion.Body>
                      {e.Tasks.map((t) => {
                        if (validTasks.includes(t.Task)) {
                          return (
                            <Form.Check
                              inline
                              label={t.Task}
                              value={t.Task}
                              name="group1"
                              type="checkbox"
                              onChange={handleChange}
                              id={`inline-checkbox-1`}
                            />
                          );
                        }
                      })}
                    </Accordion.Body>
                  </Accordion.Item>
                  <br></br>
                </Accordion>
              </>
            );
          })}
      </div>
      <div id="content-filter">
        <h1 id="selected-stage-title">Practices</h1>
        <div className="contenedor-practices-filter">
          {state &&
            state.map((e) => {
              i = i + 1;
              return (
                <PracticeFilter
                  name={e}
                  eventKey={i.toString()}
                  number={i + 1}
                />
              );
            })}
        </div>
      </div>
      <Sparck
        message="Here you can filter the practices by task. Select the ones that you are interested in."
        time={10000}
      ></Sparck>
    </div>
  );
}
