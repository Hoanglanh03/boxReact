import React from "react";
import "./Card.css";
import ButtonDI from "../Button/in_de_button/ButtonDI";

function Card({ image, title, description, price }) {
  // function Card(props) {
  return (
    <div className="card">
      <img src={image} alt="card_T-Shirt" className="card-img" />
      <p className="card-title">{title}</p>
      <p className="card-price">{price}$</p>
      {/* <div className="ButtonDI">
        <ButtonDI />
      </div> */}
    </div>
  );
}

export default Card;
