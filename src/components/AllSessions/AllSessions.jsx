import { useNavigate } from "react-router-dom";
import "./AllSessions.scss";
import Cart from "../Cart/Cart";

const sessions = [
  { id: 1, label: "Session Two", description: "Refactoring React Component Structure with Styled-Components and CSS Modules", path: "/session/2" },
  { id: 2, label: "Session Three", description: "Build a Mini-Dashboard with Interactive Widgets", path: "/session/3" },
  { id: 3, label: "Session Five", description: "Contact Us Form with Validation & Preview", path: "/session/5" },
  { id: 4, label: "Session Six", description: "Practical Exercise: Dynamic User Profile Fetcher", path: "/session/6" },
  { id: 5, label: "Session Seven", description: "Coding Exercise: Lifecycle Simulator", path: "/session/7" },
];

const AllSessions = () => {
  const navigate = useNavigate();

  return (
    <main className="all_sessions_container">
      <h1 className="head">10x React Homeworks</h1>
      {sessions.map(({ id, label, description ,path }) => (
        <Cart key={id} info={description}>
          <button className="session_button" onClick={() => navigate(path)}>{label}</button>
        </Cart>
      ))}
    </main>
  );
};

export default AllSessions;
