
import React from 'react';
import Card from 'react-bootstrap/Card';
import './practice-filter.css';
export default function Practice(props) {
  if (props.name.Cite !== undefined){
    return (   
      <Card style={{ width: '17rem' }} className="text-center">
      <Card.Body  className="d-flex align-items-center justify-content-center " id="filter-card"><p>{"''"+props.name.Practice+"''"}</p><br></br><footer >
      <a href='https://pair.withgoogle.com/guidebook'><cite title="Source"><small>{"-"+props.name.Cite}</small></cite></a>
                    </footer></Card.Body>
        </Card>

    );}
    else{
      return (   
        <Card style={{ width: '17rem' }} className="text-center">
        <Card.Body  className="d-flex align-items-center justify-content-center ">{props.name.Practice}
                      </Card.Body>
          </Card>
  
      );
    }
  
}
