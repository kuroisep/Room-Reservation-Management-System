import React from "react";
import "./AddRoom.css";
import { useState } from "react";
import Axios from "axios";


function AddRoom() {
  const [ID_Room, setIDRoom] = useState("");
  const [Name, setName] = useState("");
  const [Detail, setDetail] = useState("");
  const [Contributer, setContributer] = useState("");
  const [Building, setBuilding] = useState("");

  const addFriend = () => {

    Axios.post("http://localhost:3001/addroom", {
      id_room: ID_Room,
      Name: Name,
      Detail: Detail,
      Contributer: Contributer,
      Building: Building,
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
      <div className="header-content">
        <h1>เพิ่มห้อง</h1>
      </div>
      <div className="image-room">
        <img src="#" alt="Room Image"/>
      </div>
      <div className="inputs">
        <div className="building">
          <lable>อาคาร/สถานที่</lable>
          <select value={Building} onChange={(event) => {
            setBuilding(event.target.value)
          }}>
            <option value="ตึกที่ 1">ตึกที่ 1</option>
            <option value="ตึกที่ 2">ตึกที่ 2</option>
            <option value="ตึกที่ 3">ตึกที่ 3</option>
            <option value="หอประชุมที่ 1">หอประชุมที่ 1</option>
            <option value="หอประชุมที่ 2">หอประชุมที่ 2</option>
          </select>
        </div>
        <div className="idroom">
          <label>เลขประจำห้อง</label>
          <input
          type="text"
          placeholder="เลขประจำห้อง..."
          onChange={(event) => {
            setIDRoom(event.target.value);
          }}
        />
        </div>
        <div className="nameroom">
          <label>ชื่อห้อง</label>
          <input
          type="text"
          placeholder="ชื่อห้อง..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        </div>
        <div className="detail">
          <lable>รายละเอียด</lable>
          <textarea
            placeholder="รายละเอียด..."
            onChange={(event) => {
              setDetail(event.target.value);
            }}
          />
        </div>
        <div className="contributer">
          <label>ผู้ดูแล</label>
          <input
            type="text"
            placeholder="คนดูแล..."
            onChange={(event) => {
              setContributer(event.target.value);
            }}
          />
        </div>



        <button onClick={addFriend}>บันทึก</button>
      </div>
    </div>
  );
}

export default AddRoom;
