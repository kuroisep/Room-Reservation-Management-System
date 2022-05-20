import logo from "./logo.svg";
import { Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Roomlist from "./components/pages/Room/RoomLists/Roomlist";
import RoomReq from "./components/pages/RoomRequest/RoomReq";
import Navbar from "./components/Navbar/Navbar";
import UserList from "./components/pages/User/UserList/UserList";
import AddUser from "./components/pages/User/AddUser/addUser";
import Loginpage from "./components/pages/Login/Loginpage";
import UpdateUser from "./components/pages/UpdateUser/UpdateUser";
import { useState } from "react";
import "./App.css";

function App() {
  const [toHomepage, setHomepage] = useState(0);

  return (


      <div className="App">
        
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Loginpage />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/room-list" element={<Roomlist />} />
          <Route path="/room-request" element={<RoomReq />} />
          <Route path="/user-list" element={<UserList />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/update-user" element={<UpdateUser />} />
        </Routes>
      </div>

  );
}

export default App;
