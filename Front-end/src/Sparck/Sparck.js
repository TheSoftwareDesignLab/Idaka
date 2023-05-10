
import "./Sparck.css";
import React, { useState, useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';
import Button from "react-bootstrap/esm/Button";
function Sparck(props) {

  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(false);
  let msg="This search would take a while... Please wait and don't do any other request until you get your response"
  useEffect(() => {
    if(props.repeat)
    { 
    const interval = setInterval(() => {
      if(localStorage.getItem("searched")=="true")
      {setShow2(true);}
    }, 20000);
    return () => clearInterval(interval);
  }
  });
    
  
  return (<div className="sparck">
    <Toast onClose={() => setShow2(false)} show={show2} delay={props.time} autohide>
          <Toast.Body>{msg}<Button id="ok" onClick={() => setShow2(false)}>ok</Button></Toast.Body>
          
        </Toast>
    <Toast onClose={() => setShow(false)} show={show} delay={props.time} autohide>
          <Toast.Body>{props.message}<Button id="ok" onClick={() => setShow(false)}>ok</Button></Toast.Body>
          
        </Toast>
        
        <img id="imgSpark"
          src="Sparck.png"
          onClick={() => {setShow(true)
          }}
          alt="Sparck"
        />
        </div>
  );
}

export default Sparck;
