import { Routes, Route } from "react-router-dom";
import './App.css';
import { Error404 } from "./pages/error";
import { Home } from "./pages/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
