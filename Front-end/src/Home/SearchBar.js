import "./SearchBar.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import React, { useEffect, useState } from "react";
export default function SearchBar() {
let [model,setModel]=useState("IR");
  useEffect(() => {
    fetch("/tasksWithPractices")
      .then((res) => {
        return res.json();
      })
      .then((tasks) => {
        let temp = [];
        for (let t = 0; t < tasks.length; t++) {
          temp.push(tasks[t].Task);
        }
        localStorage.setItem("tasksWithPractices", temp);
      });
  }, []);
  let [state, setState] = useState();
  function postSearch() {
    var btnsearch = document.getElementById("btn-search");
    setTimeout(() => {
      let json=JSON.stringify({'practices':[],'scores':[]})
      localStorage.setItem("search_result",json);
      localStorage.setItem("alpaca","");
      window.location.assign("/practices-search");
    }, 240000);
    var model = document.getElementById("model").value;
    localStorage.setItem("model", model);
    var progress = document.getElementById("progress");
    progress.classList.add("charge");
    localStorage.setItem("created", "true");
    localStorage.setItem("searched", "true");
    localStorage.setItem("resp post", "");
    localStorage.setItem("alpaca", "");
    var contenido = document.getElementById("input").value;
    localStorage.setItem("query", contenido);
    var done=false;
    const postQ = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    if(model=="IR"){
      fetch( "/practices/search/" + contenido, postQ)
      .then((res) => {
        return res.json();
      })
      .then((practices) => {
        let resul_jason = practices[0];
        changeLocalStorage(resul_jason, contenido);
          window.location.assign("/practices-search");
      });
    }
    else{
      fetch( "/dalai/"+contenido, postQ)
        .then((res) => {
          return res.json();
        })
        .then((practices) => {
          localStorage.setItem("alpaca", practices['token']);
          window.location.assign("/practices-search");
        });
    }
}
  function changeLocalStorage(result, contenido) {
    localStorage.setItem("search_result", result);
  }

  state = {
    practices: [],
  };
  const handleKeypress = e => {
    //it triggers by pressing the enter key
  if (e.charCode === 13) {
    var progress = document.getElementById("progress");
              progress.classList.add("charge");
              postSearch();
  }
};
localStorage.setItem("searched", "false");
  return (
    <div className="background">
      <div className="search-bar" onKeyPress={handleKeypress}>
        <InputGroup className="mb-3" onKeyPress={handleKeypress}>
          <Form.Control
            placeholder="Find the best practices for you"
            aria-label="Find the best practices for you"
            aria-describedby="basic-addon2"
            id="input"
            onKeyPress={handleKeypress}
          />
        
      <select class="select drop-search" id="model">
  <option value="IR">IR</option>
  <option value="Alpaca">Alpaca</option>
</select>
          <Button
          id="btn-search"
            variant="search"
            type = "submit"
            onClick={() => {
              var progress = document.getElementById("progress");
              progress.classList.add("charge");
              var btn = document.getElementById("btn-search");
              btn.classList.add("disabled");
              postSearch();
              
            }}
            
          >
             
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              height="24"
              width="24"
            >
              <path d="m18.8 20.425-5.55-5.55q-.75.575-1.725.925-.975.35-2.075.35-2.775 0-4.7-1.938Q2.825 12.275 2.825 9.5q0-2.775 1.925-4.713Q6.675 2.85 9.45 2.85q2.775 0 4.713 1.937Q16.1 6.725 16.1 9.5q0 1.1-.337 2.075-.338.975-.913 1.7l5.575 5.6q.3.3.3.763 0 .462-.325.787t-.812.325q-.488 0-.788-.325ZM9.45 13.85q1.825 0 3.1-1.263 1.275-1.262 1.275-3.087 0-1.825-1.275-3.088-1.275-1.262-3.1-1.262-1.825 0-3.087 1.262Q5.1 7.675 5.1 9.5q0 1.825 1.263 3.087Q7.625 13.85 9.45 13.85Z" />
            </svg>
          </Button>
        </InputGroup>
      </div>
    </div>
     
  );
  
}
