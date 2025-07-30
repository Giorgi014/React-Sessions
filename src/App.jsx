import AllSessions from "./components/AllSessions/AllSessions";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SessionThree, SessionTwo } from "./components/AllSessions/Route";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllSessions />} />
        <Route path="/session/2" element={<SessionTwo />} />
        <Route path="/session/3" element={<SessionThree />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
