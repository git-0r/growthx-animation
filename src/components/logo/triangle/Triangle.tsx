import "./Triangle.css";
const Triangle = () => {
  return (
    <svg width="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="outline-clip">
          <rect className="clip-rect" x="0" y="100" width="100" height="100" />
        </clipPath>
      </defs>

      <path
        className="shape-to-fill"
        d="M 0,10 C 40,10 50,45 50,75 C 50,45 60,10 100,10 Z"
        fill="#FFFFFF"
      />

      <path
        className="shape-outline"
        clipPath="url(#outline-clip)"
        d="M 0,10 C 40,10 50,45 50,75 C 50,45 60,10 100,10 Z"
        stroke="#FFFFFF"
        strokeWidth="0.5"
        fill="none"
      />
    </svg>
  );
};

export default Triangle;
