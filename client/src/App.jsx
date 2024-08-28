import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Projects from "./components/Projects";
import Dashoard from "./components/Dashoard";

function App() {
  return (
    <>
      <p className="text-3xl text-red-500">Hello World</p>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/dashoard" element={<Dashoard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
