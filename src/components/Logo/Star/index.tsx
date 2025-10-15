import "./Star.css";

const Star = () => {
  return (
    <div className="star-container">
      <svg
        className="star-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 50,0 Q 55,45 100,50 Q 55,55 50,100 Q 45,55 0,50 Q 45,45 50,0 Z"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  );
};

export default Star;
