import AllSessions from "./components/AllSessions/AllSessions";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  SessionTwo,
  SessionThree,
  SessionFive,
  SessionSix,
  SessionSeven,
  SessionNine,
  SessionTen,
} from "./components/AllSessions/Route";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllSessions />} />
        <Route path="/session/2" element={<SessionTwo />} />
        <Route path="/session/3" element={<SessionThree />} />
        <Route path="/session/5" element={<SessionFive />} />
        <Route path="/session/6" element={<SessionSix />} />
        <Route path="/session/7" element={<SessionSeven />} />
        <Route path="/session/9" element={<SessionNine />} />
        <Route path="/session/10" element={<SessionTen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
