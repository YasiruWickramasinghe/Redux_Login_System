import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
// import Register from "./Pages/Register";
import Logout from "./Pages/Logout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
