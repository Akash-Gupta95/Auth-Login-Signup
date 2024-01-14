import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Policy from "./Pages/Policy";
import PageNotFound from "./Pages/PageNotFound";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import Dashboard from "./user/Dashboard";
import ForgotPassword from "./Pages/Auth/forgotPassword";
import PrivateRoute from "./component/Routes/Private";

function App() {
  return (<>    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/dashboard" element={<PrivateRoute />}>
        <Route path="" element={<Dashboard />}></Route>
      </Route>

      <Route path="/register" element={<Register />}></Route>
      <Route path="/forgetPassword" element={<ForgotPassword />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/policy" element={<Policy />}></Route>
      <Route path="/*" element={<PageNotFound />}></Route>
    </Routes>
      </>

  );
}

export default App;
