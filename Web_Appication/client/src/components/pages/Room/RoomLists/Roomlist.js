import React, { Component } from 'react'
import Axios from "axios";
import RoomTableRow from './RoomTableRow';
import AddRoom from '../AddRoom/AddRoom';
import Popup from './AddRoomPopup';
import "./Roomlist.css";

export default class Roomlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
      PopupRoom : false,
    };
  }


  componentDidMount() {
    Axios.get("http://localhost:3001/readroom")
      .then((res) => {
        this.setState({
          rooms: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }


  DataTable = () => {
    return this.state.rooms.map((res, i) => {
      return <RoomTableRow obj={res} key={i} />;
    });
  };


  render() {
    return (
      <div className="MainContainer">
        <div className="TopContainer">
          <h1 className="">จัดการห้อง</h1>
          <input
            type="button"
            className='button-add-rooms'
            value="เพิ่มห้อง"
            onClick={() => this.setState({ PopupRoom : !this.state.PopupRoom})}
          />

          {this.state.PopupRoom && <Popup
            content ={<AddRoom/>}
            handleClose={() => this.setState({PopupRoom : !this.state.PopupRoom})}
        />}
        </div>
        <table>
          <tr className="HeaderTable">
            <th>รูป</th>
            <th>ห้อง</th>
            <th>คนดูแล</th>
            <th>อาคาร</th>
            <th>Action</th>
          </tr>
          <tbody>{this.DataTable()}</tbody>
        </table>
      </div>
    );
  }
}
