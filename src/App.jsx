import GuessWord from "./components/GuessWord";
import HangmanUI from "./components/HangmanUI";
import "./components/index.css";
import { ContextProvider } from "./contexts/AppContext";

function App() {
  return (
    <ContextProvider>
      <div className="h-screen grid grid-cols-3">
        <HangmanUI />
        <GuessWord />
      </div>
    </ContextProvider>
  );
}

export default App;
