import "./index.css";
function Button({ children, onClick, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`w-8 h-auto rounded-md m-1 p-1 bg-purple-700 text-white ${
        disabled ? "opacity-25" : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
