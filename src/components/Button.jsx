export const Button = ({ btnText, bgColor, onClick }) => {
  return (
    <button
      className={`${bgColor} text-white rounded-lg px-8 py-3`}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};
