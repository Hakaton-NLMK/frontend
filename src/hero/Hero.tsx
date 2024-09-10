import React, { useState } from "react";
import logo from "./logo.svg";
import style from "./hero.module.css";

const render = (): void => {
  let e = "";
  const conElement = document.getElementById("con");
  if (conElement) conElement.remove();

  const btnElement = document.getElementById("btn") as HTMLInputElement;
  const value = btnElement.value;

  fetch("http://84.201.147.205:8000/api/v1/generate-component", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: value,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const d = document.getElementById("data");
      if (d) {
        d.innerText = data;
        d.style.border = "2px solid black";
        d.style.padding = "25px";
      }
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      e = "There was a problem with the fetch operation:";
      const hero = document.getElementById("hero");
      if (hero) {
        const container = document.createElement("div");
        container.className = "error";
        container.id = "con";
        container.innerText = e + error;
        hero.appendChild(container);
      }
    });

  if (btnElement) btnElement.value = "";
};

const Hero: React.FC = () => {
  return (
    <div className={style.hero}>
      <img src={logo} className={style.logo} alt="logo" />
      <input
        id="btn"
        className={style.input}
        type="text"
        placeholder="Введите код компонента / Write code component"
      />
      <button onClick={render} className={style.btn}>
        Render
      </button>
      <div id="data" className={style.data}></div>
    </div>
  );
};

export default Hero;
