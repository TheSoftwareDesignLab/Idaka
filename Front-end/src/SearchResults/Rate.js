import Card from "react-bootstrap/Card";
import "./Rate.css";
import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
function RateCard() {

  const [show, setShow] = useState(false);
  const [word, setWord] = useState("");
  function rank(r) {
    
    setShow(true);
    const query = {
      query: localStorage.getItem("resp post"),
      rate: r
    }

    const postQ = {
      method: "PUT",
      body: JSON.stringify(query),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    fetch("/queries", postQ)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log('resp post',JSON.stringify(data));
      })
      .catch((error) => {
        console.log("caught", error.message);
      });

  }
function improve(){
  const postQ = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  fetch("/synonyms/"+localStorage.getItem('query'), postQ)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    let s= Math.floor(Math.random() * (data.length) )
    if(data.length>0){
    setWord(data[s]);
    var imp = document.getElementById("improve");
              imp.classList.add("active");
}
  })
  .catch((error) => {
    console.log("caught", error.message);
  });
}

function getSynonyms(){
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;
  var input3 = document.getElementById("input3").value;   
  var ans=[]
  ans.push(input1);
  ans.push(input2);
  ans.push(input3); 
  document.getElementById("input1").value="";
  document.getElementById("input2").value="";
  document.getElementById("input3").value="";
  var imp = document.getElementById("improve");
              imp.classList.remove("active");    
              const q={
                query:localStorage.getItem('query'),
                word:word,
                synonyms:ans
              }
              const postQ = {
                method: "POST",
                body: JSON.stringify(q),
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
              };
              fetch("/synonyms", postQ)
              .then(function (res) {
                return res.json();
              })
              .then(function (data) {
                console.log('resp synonym',data);
            
              })
              .catch((error) => {
                console.log("caught", error.message);
              });
}
  return (<>
    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Body>Thanks for your answer!</Toast.Body>
        </Toast>
        <Card id="improve"><Card.Header>
        <h5>Help us improve our system!</h5>
        <h6>Give us 3 ways to say "{word}"</h6>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Synonym #1"
          aria-label="Synonym #1"
          aria-describedby="basic-addon2"
          id="input1"
        />
        </InputGroup>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Synonym #2"
          aria-label="Synonym #2"
          aria-describedby="basic-addon2"
          id="input2"
        /></InputGroup>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Synonym #3"
          aria-label="Synonym #3"
          aria-describedby="basic-addon2"
          id="input3"
        />
      </InputGroup>
      <Button id="submit-sugestion" onClick={()=>{getSynonyms()}}>Submit</Button>
      </Card.Header></Card>
    <Card border="light" id="rate-card">
      <Card.Header>
        <h5>Rate this search</h5>
      </Card.Header>
      <Card.Body>
        <img
          src="rate1.png"
          onClick={() => {
            rank(1);
            improve();
          }}
          alt="1"
        />
        <img
          src="2.png"
          onClick={() => {
            rank(2);
            improve();
          }}
          alt="2"
        />
        <img
          src="3.png"
          onClick={() => {
            rank(3);
            improve();
          }}
          alt="3"
        />
        <img
          src="4.png"
          onClick={() => {
            rank(4);
          }}
          alt="4"
        />
        <img
          src="5.png"
          onClick={() => {
            rank(5);
          }}
          alt="5"
        />
      </Card.Body>
    </Card>
    </>
  );
}

export default RateCard;
