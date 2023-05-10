import "./searchResults.css";
import React, { useState, useEffect } from "react";

import Practice from "./Practice";
import RateCard from "./Rate";
import Button from "react-bootstrap/esm/Button";

import Sparck from "../Sparck/Sparck";

export default function SearchResults() {
  let acabo = false;
  let practices_id = JSON.parse(localStorage.getItem("search_result"))[
    "practices"
  ];
  let scores = JSON.parse(localStorage.getItem("search_result"))["scores"];
  let [state, setState] = useState([]);
  let [alpaca, setAlpaca] = useState([]);
  let alp = localStorage.getItem("alpaca");

  let [list, setList] = useState(5);
  const postQ = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  if (localStorage.getItem("created") == "true") {
    postQuery();
  }
  function postQuery() {
    localStorage.setItem("created", "false");
    var contenido = localStorage.getItem("query");
    var practices = [];
    let ls_scores = scores;
    let i = -1;
    for (let id = 0; id < practices_id.length; id++) {
      i++;
      const practice_ranked = {
        _id: practices_id[id],
        similarity: ls_scores[i],
        position: i + 1,
        rank: "",
      };
      practices.push(practice_ranked);
    }
    let ip = "";
    fetch("https://geolocation-db.com/json/")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        ip = JSON.stringify(data);
        const query = {
          query: contenido,
          rate: "",
          practicesRetrieved: practices,
          userIp: ip,
        };

        const postQ = {
          method: "POST",
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
            localStorage.setItem(
              "resp post",
              JSON.stringify(data["insertedId"])
            );
          })
          .catch((error) => {
            console.log("caught", error.message);
          });
      })
      .catch((error) => {
        console.log("caught", error.message);
      });
  }
  useEffect(() => {
    var progress = document.getElementById("progress");
    var notfound = document.getElementById("notfound");
    var model = localStorage.getItem("model");
    //Alpaca
    if (model == "Alpaca") {
      if (alp.length < 10) {
        progress.classList.remove("charge");
        notfound.classList.add("notfound");
      }
      alp = alp.replace("<end>", "");
      alp = alp.replace("[end of text]", "");
      alp = alp.replace("Best Practice", "");
      alp = alp.replace("Best practice", "");
      alp = alp.slice(alp.indexOf("1"));
      let alpaca_dividido = String(alp).split(/[0-9]+[.):]/);
      progress.classList.add("charge");

      let resp_alpaca = [];

      for (let i = 1; i < alpaca_dividido.length; i++) {
        let divided = alpaca_dividido[i].split(/[-:–]+ /);

        if (divided[0].length > 5) {
          let desc = "No more information available.";
          let prac=divided[0];
          if (divided.length<2)
          {
           divided = alpaca_dividido[i].split(/[-:–-]/);
          }
          if (
            divided[1] != " " &&
            divided[1] != "" &&
            divided[1] != undefined
          ) {
            desc = divided[1];
            prac=divided[0];
          } 
          else if (
            divided[0].split(/[.]/)[1] != " " &&
            divided[0].split(/[.]/)[1] != "" &&
            divided[0].split(/[.]/)[1] != undefined
          ) {
            desc = divided[0].split(/[.]/)[1];
            prac=divided[0].split(/[.]/)[0];
          }
          let a = {
            Practice: prac,

            Description: desc,
          };
          resp_alpaca.push(a);
        }
      }
      acabo = true;
      setState(resp_alpaca);

      var progress = document.getElementById("progress");
      progress.classList.remove("charge");
    }
    //IR
    else {
      if (practices_id.length < 1) {
        progress.classList.remove("charge");
        notfound.classList.add("notfound");
      }
      fetch("/practices/find/" + practices_id)
        .then((res) => {
          return res.json();
        })
        .then((practices) => {
          let ans = [];
          for (let id = 0; id < practices_id.length; id++) {
            for (let id1 = 0; id1 < practices.length; id1++) {
              if (practices[id1]._id === practices_id[id]) {
                ans.push(practices[id1]);
              }
            }
          }
          acabo = true;
          setState(ans);
          var progress = document.getElementById("progress");
          progress.classList.remove("charge");
        });
    }
  }, []);

  var i = -1;
  return (
    <div className="background2">
      <Button href="/" className="back" Title="Search again">
        <small>
          {" "}
          <svg
            id="search-again"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            height="24"
            width="24"
          >
            <path d="m18.8 20.425-5.55-5.55q-.75.575-1.725.925-.975.35-2.075.35-2.775 0-4.7-1.938Q2.825 12.275 2.825 9.5q0-2.775 1.925-4.713Q6.675 2.85 9.45 2.85q2.775 0 4.713 1.937Q16.1 6.725 16.1 9.5q0 1.1-.337 2.075-.338.975-.913 1.7l5.575 5.6q.3.3.3.763 0 .462-.325.787t-.812.325q-.488 0-.788-.325ZM9.45 13.85q1.825 0 3.1-1.263 1.275-1.262 1.275-3.087 0-1.825-1.275-3.088-1.275-1.262-3.1-1.262-1.825 0-3.087 1.262Q5.1 7.675 5.1 9.5q0 1.825 1.263 3.087Q7.625 13.85 9.45 13.85Z" />
          </svg>
        </small>
        <small>Search again</small>
      </Button>
      <h1 id="query">{localStorage.getItem("query")}</h1>
      <div id="notf">
        <h1 id="notfound">
          Ops! There are no practices related, try again with another query
        </h1>
      </div>
      <div id="base">
        {state &&
          state.map((e) => {
            i = i + 1;
            if (i < list) {
              return <Practice eventKey={i} name={e} number={i + 1}></Practice>;
            }
          })}
        <div className="buttons-show">
          {["Show more", "Show less"].map((b) => {
            if (b == "Show more") {
              if (state.length > list) {
                return (
                  <Button
                    onClick={() => {
                      setList(list + 5);
                    }}
                    className="more"
                    Title="Show more practices"
                  >
                    <small>{b}</small>
                  </Button>
                );
              }
            } else {
              if (list >= 10) {
                return (
                  <Button
                    onClick={() => {
                      setList(list - 5);
                    }}
                    className="more"
                    Title="Show less practices"
                  >
                    <small>{b}</small>
                  </Button>
                );
              }
            }
          })}
        </div>
      </div>
      <div id="alpaca">
        {alpaca &&
          alpaca.map((p) => {
            i = i + 1;
            if (i < list) {
              return <Practice eventKey={i} name={p} number={i + 1}></Practice>;
            }
          })}
        
      </div>
      <RateCard></RateCard>
      <Sparck
        message="Here you can find the practices related to the task you searched for"
        time={8000}
      />
    </div>
  );
}
