import Dashes from "./Dashes";
import WrongLetters from "./WrongLetters";
import KeyBoard from "./KeyBoard";

function GuessWord({ word = "hello" }) {
  return (
    <div>
      <Dashes word={word} />
      <WrongLetters word={word} />
      <KeyBoard />
    </div>
  );
}

export default GuessWord;
