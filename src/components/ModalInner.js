import React from "react";
import "./modalInner.css";
const ModalInner = props => {
  const {
    Card: { imageses, name, description, text, technolgieses }
  } = props.data;
  return (
    <div id="container">
      <h2>{name}</h2>
      <p>{description}.</p>
      <p>{text}.</p>
      <h4>technolgies used:</h4>
      <ul>
        {technolgieses.map(item => {
          return <li key={item.id}>{item.language}</li>;
        })}
      </ul>
      <section className="card">
        {imageses.map(item => {
          return (
            <img
              src={item.image}
              alt="sorry"
              className="card--content"
              key={item.id}
            />
          );
        })}
      </section>
    </div>
  );
};

export default ModalInner;
