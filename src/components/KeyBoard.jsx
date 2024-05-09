import { useEffect } from "react";
import { useCont } from "../contexts/AppContext";
import Button from "./Button";
import "./index.css";

function KeyBoard() {
  const alphabetIndexes = Array.from(Array(26).keys());
  const alphabetArray = alphabetIndexes.map((index) =>
    String.fromCharCode(97 + index)
  );
  const { setChoosenLetter, disabledLetters, setDisabledLetters } = useCont();

  useEffect(() => {
    // Reset disabled letters when the game restarts
    setDisabledLetters([]);
  }, [setDisabledLetters]);

  const handleButtonClick = (letter) => {
    setChoosenLetter(letter);
    setDisabledLetters([...disabledLetters, letter]);
  };

  return (
    <div>
      {alphabetArray.map((ele, i) => (
        <Button
          key={i}
          onClick={() => handleButtonClick(ele)}
          disabled={disabledLetters.includes(ele)}
        >
          {ele}
        </Button>
      ))}
    </div>
  );
}

export default KeyBoard;
