import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import ToDo from "./components/ToDo";
import Calender from "./components/Calender";

function App() {
  return (
    <div>
      <Navbar></Navbar>
    <Routes>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/todo" element={<ToDo></ToDo>}></Route>
      <Route path="/calendar" element={<Calender></Calender>}></Route>
    </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
