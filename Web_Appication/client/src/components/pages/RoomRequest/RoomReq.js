import React, { Component } from 'react'
import axios from "axios";
import ReqTableRow from './ReqTableRow';
import './Roomreq.css'




export default class RoomReq extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reqs: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/readrequest")
      .then((res) => {
        this.setState({
          reqs: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable = () => {
    return this.state.reqs.map((res,i) => {
      return <ReqTableRow obj={res} key={i} />;
    });
  };


  render() {
    return (
      <div className="MainContainer">
        <div className="TopContainer">
          <h1 className="">จัดการคำขอ</h1>
        </div>
        <table>
          <tr className="HeaderTable">
            <th>ห้อง</th>
            <th>ตึก</th>
            <th>จำนวนผู้เข้าร่วม</th>
            <th>วันที่จอง</th>
            <th>ผู้ยื่นคำขอ</th>
            <th>ผู้ดูแลห้อง</th>
            <th>Action</th>
          </tr>
          <tbody>{this.DataTable()}</tbody>
        </table>
      </div>
    )
  }
}
