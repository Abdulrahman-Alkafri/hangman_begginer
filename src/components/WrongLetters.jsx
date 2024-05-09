import { useEffect, useRef } from "react";
import { useCont } from "../contexts/AppContext";

function WrongLetters({ word }) {
  const { choosenLetter, setWrongAttempt, wrongAttempt, handleGameOver } =
    useCont();
  const alreadyCheckedLetters = useRef([]);
  console.log("Wrong attempt count:", wrongAttempt);
  useEffect(() => {
    if (
      choosenLetter &&
      !word.includes(choosenLetter) &&
      !alreadyCheckedLetters.current.includes(choosenLetter)
    ) {
      if (wrongAttempt < 6) {
        console.log("Increasing wrong attempt count");
        setWrongAttempt((attempt) => attempt + 1);
        alreadyCheckedLetters.current.push(choosenLetter);
      } else {
        alert(
          "Game over! You've exceeded the maximum number of wrong attempts."
        );
        handleGameOver();
      }
    }
  }, [choosenLetter, word, wrongAttempt, handleGameOver, setWrongAttempt]);

  return (
    <div>
      wrong attempts <span className={"text-red-600"}>{wrongAttempt}/6</span>
    </div>
  );
}

export default WrongLetters;
