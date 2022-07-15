// import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SingleMovie from "./Components/SingleMovie";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
