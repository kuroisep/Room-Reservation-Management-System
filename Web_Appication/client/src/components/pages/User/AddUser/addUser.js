import React from "react";
import "./addUser.css";
import { useState } from "react";
import Axios from "axios";


function AddUser() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [institute, setInstitue] = useState("");
  const [role, setRole] = useState("");

  const addFriend = () => {

    Axios.post("http://localhost:3001/adduser", {
      user: user,
      pass: pass,
      firstname: first_name,
      lastname: last_name,
      Email: email,
      Status: status,
      Role: role,
    })
      .then(() => {
        alert("Add to database");
      })
      .catch(() => {
        alert("Can't Add");
      });
  };

  return (

    <div className="forminput">
      <div className="image-profile">
        <img src="#" alt="Image Profile" />
      </div>
      <div className="inputline">
        <div className="username">
          <label>Username</label>
          <input
            type="text"
            placeholder="Username..."
            onChange={(event) => {
              setUser(event.target.value);
            }}
          />
        </div>
        <div className="name">
          <label>ชื่อ</label>
          <input
            type="text"
            className="firstnameinput"
            placeholder="First Name..."
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
          <label className="lastnamelabel">สกุล</label>
          <input
            type="text"
            className="lastnameinput"
            placeholder="Last Name..."
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
        </div>
        <div className="email">
          <label>E-mail</label>
          <input
            type="text"
            placeholder="Email..."
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="pass">
          <label>รหัสผ่าน</label>
          <input
            type="Password"
            placeholder="Password..."
            onChange={(event) => {
              setPass(event.target.value);
            }}
          />
        </div>
        <div className="statusandrole">
          <label>Status</label>
          <select className="statusinput" value={status} onChange={(event) => {
            setStatus(event.target.value)
          }}>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
          </select>
          <label className="rolelabel">Role</label>
          <select className="roleinput" value={role} onChange={(event) => {
            setRole(event.target.value)
          }}>
            <option value="User">User</option>
            <option value="Contribute">Contribute</option>
            <option value="RoomContribute">Contribute of Room</option>
          </select>
        </div>
        <button onClick={addFriend}>บันทึก</button>
      </div>
    </div>
  );
}

export default AddUser;
