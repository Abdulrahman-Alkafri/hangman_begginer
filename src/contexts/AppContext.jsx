import { useContext, useState } from "react";
import { createContext } from "react";

const TheContext = createContext();

function ContextProvider({ children }) {
  const [choosenLetter, setChoosenLetter] = useState("");
  const [wrongAttempt, setWrongAttempt] = useState(0);
  const [chosenLetters, setChosenLetters] = useState([]);
  const [disabledLetters, setDisabledLetters] = useState([]);
  function handleGameOver() {
    console.log("Resetting game state...");
    setChoosenLetter("");
    setWrongAttempt(0);
    setChosenLetters([]);
    setDisabledLetters([]); // Reset disabled letters directly
  }

  return (
    <TheContext.Provider
      value={{
        choosenLetter,
        setChoosenLetter,
        wrongAttempt,
        setWrongAttempt,
        chosenLetters,
        setChosenLetters,
        handleGameOver,
        disabledLetters,
        setDisabledLetters,
      }}
    >
      {children}
    </TheContext.Provider>
  );
}
function useCont() {
  const context = useContext(TheContext);
  return context;
}
export { ContextProvider, useCont };
