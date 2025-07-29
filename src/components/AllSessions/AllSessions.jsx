import { SessionThree, SessionTwo } from "./Route";
import "./AllSessions.scss";

const AllSessions = () => {
  return (
    <main className="all_sessions_container">
      <h1 className="head">10x React Sessions</h1>
      <SessionTwo />
      <SessionThree />
    </main>
  );
};

export default AllSessions;
