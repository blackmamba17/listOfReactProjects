import React from "react";
import { useState } from "react";
import { persone } from "../../../data.ts";

const shuffleAlgorithm = () => {
  //console.log(persone);
  for (
    let indexOfPersona = 0;
    indexOfPersona < persone.length - 1;
    indexOfPersona++
  ) {
    const randomIndex = Math.floor(Math.random() * persone.length);
    const container = persone[randomIndex];
    persone[randomIndex] = persone[indexOfPersona];
    persone[indexOfPersona] = container;
  }
  return persone;
};

const UseStateObject = () => {
  const [arrayOfPerson, setArrayOfPerson] = useState(persone);

  return (
    <>
      <h1>{arrayOfPerson[0].nome}</h1>
      <h2>{arrayOfPerson[0].età}</h2>
      <h3>{arrayOfPerson[0].passione}</h3>
      <button
        type="button"
        onClick={() => {
          setArrayOfPerson([...shuffleAlgorithm()]);
        }}
      >
        clicca per cambiare
      </button>
    </>
  );
};

export default UseStateObject;
