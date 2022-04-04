import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Dashboard from "./components/Dashboard/Dashboard";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/About/About";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <div>
      <div className="container">
        <Header></Header>
        <hr className="line"/>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/reviews" element={<Reviews></Reviews>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
