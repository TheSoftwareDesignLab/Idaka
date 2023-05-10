
  
  import './practices.css';
  import React from 'react';
  import Practice from "./Practice";
  
  export default class Practices extends React.Component {
    componentDidMount() {
      const url = "/practices";
      fetch(url)
        .then(res => { 
          return res.json();
        }).then(practices => {
          this.setState({ practices })
        })
    }
  
    state = {
      "practices": []
    };

    render() {
      var i=-1; 
      return (
<>
          {this.state.practices.map((e) => {i=i+1; 
        return <Practice name={e} eventKey= {i.toString()} number={i+1}/>} )}
          
      
            </>
      );
    }
  }




  