import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div id="navbar">
      <Link to="/home">Home</Link>
      <Link className="rd" to="/red">
        Red
      </Link>
      <Link className="og" to="/orange">
        Orange
      </Link>
      <Link className="yw" to="/yellow">
        Yellow
      </Link>
      <Link className="gn" to="/green">
        Green
      </Link>
      <Link className="bl" to="/blue">
        Blue
      </Link>
      <Link className="io" to="Indigo">
        Indigo
      </Link>
      <Link className="vt" to="/violet">
        Violet
      </Link>
    </div>
  );
}
