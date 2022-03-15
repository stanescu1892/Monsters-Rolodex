import React from "react";
import "./CardStyles.css";

function Card(props) {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
      <h2> {props.monster.name} </h2>
      <p> {props.monster.email} </p>
    </div>
  );
}

export default Card;
