import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const SessionTen = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        onClick={() => navigate("/")}
        className="flex cursor-pointer absolute top-0 left-5"
      >
        <FaArrowLeftLong />
        Back
      </div>
      SessionTen
    </div>
  );
};

export default SessionTen;
