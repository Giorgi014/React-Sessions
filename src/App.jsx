import AllSessions from "./components/AllSessions/AllSessions";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SessionTwo, SessionThree, SessionFoure } from "./components/AllSessions/Route";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllSessions />} />
        <Route path="/session/2" element={<SessionTwo />} />
        <Route path="/session/3" element={<SessionThree />} />
        <Route path="/session/4" element={<SessionFoure />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
