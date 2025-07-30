import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import "./SessionThree.css";

const SessionThree = () => {
  const navigate = useNavigate();
  return (
    <div className="session_three_cont">
      <div
        className="back_home"
        style={{
          cursor: "pointer",
          position: "absolute",
          top: "0px",
          left: "20px",
        }}
        onClick={() => navigate("/")}
      >
        <FaArrowLeftLong />
        Back
      </div>
    </div>
  );
};

export default SessionThree;
