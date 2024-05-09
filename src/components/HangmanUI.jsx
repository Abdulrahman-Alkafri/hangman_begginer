import { useCont } from "../contexts/AppContext";
import "./index.css";
function HangmanUI() {
  const { wrongAttempt } = useCont();
  return (
    <>
      <div className={`m-32 relative -left-12`}>
        <header className={`w-40 bg-black h-1 relative`}></header>
        <div className={`w-1 h-12 bg-black left-32`}></div>
        <main className={`w-1 h-48 bg-black`}></main>
        <footer className={`w-40 bg-black h-1 relative -left-16`}></footer>
      </div>

      <div
        className={`flex justify-center items-center h-screen relative -left-full -top-16`}
      >
        <div className={`p-4`}>
          <div className={`flex flex-col items-center`}>
            <div
              className={`w-8 h-8 bg-gray-800 rounded-full ${
                wrongAttempt < 1 ? "hidden" : ""
              }`}
            ></div>
            <div className={`flex`}>
              <div
                className={`w-2 h-8 bg-gray-800 transform rotate-45 mr-4 ${
                  wrongAttempt < 2 ? "hidden" : ""
                }`}
              ></div>{" "}
              {/* Left Hand */}
              <div
                className={`w-2 h-8 bg-gray-800 transform -rotate-45 ${
                  wrongAttempt < 3 ? "hidden" : ""
                }`}
              ></div>{" "}
              {/* Right Hand */}
            </div>
            <div className={`flex mb-1`}>
              <div
                className={`w-2 h-8 bg-gray-800 -my-5 ${
                  wrongAttempt < 4 ? "hidden" : ""
                }`}
              ></div>
            </div>
            <div className={`flex mt-1`}>
              <div
                className={`w-2 h-12 bg-gray-800 transform rotate-45 mr-7 ${
                  wrongAttempt < 5 ? "hidden" : ""
                }`}
              ></div>{" "}
              {/* Left Leg */}
              <div
                className={`w-2 h-12 bg-gray-800  transform -rotate-45 ${
                  wrongAttempt < 6 ? "hidden" : ""
                }`}
              ></div>{" "}
              {/* Right Leg */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HangmanUI;
