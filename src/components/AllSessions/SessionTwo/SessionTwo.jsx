import {
  About,
  BlogPost,
  Feature,
  Footer,
  Header,
  Hero,
  Testimonials,
} from "./SessionTwoRoute.jsx";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "./SessionTwo.css";

const SessionTwo = () => {
  const navigate = useNavigate();

  return (
    <div className="session_two_cont">
      <div
        className="back_home"
        style={{ cursor: "pointer", position: "absolute", top: "0px", left: "20px" }}
        onClick={() => navigate("/")}
      >
        <FaArrowLeftLong />
        Back
      </div>

      <Header />
      <Hero />
      <Feature />
      <BlogPost />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
};

export default SessionTwo;
