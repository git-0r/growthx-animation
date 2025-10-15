import Star from "../Logo/Star";
import Triangle from "../Logo/Triangle";
import "./ElevateAnimation.css";

const ElevateAnimation = () => {
  return (
    <div className="logo-container">
      <div className="graphic-container">
        <Star />
        <Triangle />
      </div>
      <div className="elevate-text">ELEVATE</div>
    </div>
  );
};

export default ElevateAnimation;
