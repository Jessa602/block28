import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "10px",
        backgroundColor: "#f0f0f0",
        textAlign: "center",
      }}
    >
      <div>
        <Link to="/home">Home</Link> &nbsp; | &nbsp;
        <Link className="rd" to="/red">
          Red
        </Link>{" "}
        &nbsp; | &nbsp;
        <Link className="og" to="/orange">
          Orange
        </Link>{" "}
        &nbsp; | &nbsp;
        <Link className="yw" to="/yellow">
          {" "}
          &nbsp; | &nbsp; Yellow
        </Link>{" "}
        &nbsp; | &nbsp;
        <Link className="gn" to="/green">
          Green
        </Link>{" "}
        &nbsp; | &nbsp;
        <Link className="bl" to="/blue">
          Blue
        </Link>{" "}
        &nbsp; | &nbsp;
        <Link className="io" to="Indigo">
          Indigo
        </Link>{" "}
        &nbsp; | &nbsp;
        <Link className="vt" to="/violet">
          Violet
        </Link>
      </div>
    </footer>
  );
}
