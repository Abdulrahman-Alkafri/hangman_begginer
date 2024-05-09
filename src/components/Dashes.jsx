import { useCont } from "../contexts/AppContext";

import { useState, useEffect } from "react";

function Dashes({ word }) {
  const wordLetters = word.split("");
  const { choosenLetter, chosenLetters, setChosenLetters } = useCont();

  useEffect(() => {
    if (choosenLetter && !chosenLetters.includes(choosenLetter)) {
      setChosenLetters([...chosenLetters, choosenLetter]);
    }
  }, [choosenLetter, chosenLetters, setChosenLetters]);

  return (
    <div className={"flex flex-wrap justify-evenly my-28 mx-10"}>
      {wordLetters.map((letter, i) => (
        <span key={i} className={""}>
          {chosenLetters.includes(letter) ? letter : "__"} {"  "}
        </span>
      ))}
    </div>
  );
}

export default Dashes;
