import React from "react";
import "./Card.css";
import ButtonDI from "../button/in_de_button/ButtonDI";

// function Card({ image, title, description }) {
function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt="card_T-Shirt" className="card-img" />
      <h1 className="card-title">{props.title}</h1>
      <p className="card-description">{props.description}</p>
      <div className="ButtonDI">
        <ButtonDI />
      </div>
    </div>
  );
}

export default Card;
