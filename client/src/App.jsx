import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./component/pages/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/pages/login";
import Home from "./component/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
