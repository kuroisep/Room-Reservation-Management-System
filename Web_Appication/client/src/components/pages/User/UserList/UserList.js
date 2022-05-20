import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./UserList.css";
import UserTableRow from "./UserTableRow";
import Popup from "./AddUserPopup";
import AddUser from "../AddUser/addUser";

export default class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      count: false,
      
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:3001/readuser")
      .then((res) => {
        console.log("Read User!!")
        this.setState({
          users: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable = () => {
    return this.state.users.map((res, i) => {
      return <UserTableRow obj={res} key={i} />;
    });
  };

  // Popupmethod = () => {
  //   this.setState({
  //     popOpen : true
  //   })
  //   console.log(this.popOpen)

  // }


  render() {
    return (
      <div className="MainContainer">
        <div className="TopContainer">
          <h1 className="">จัดการผู้ใช้</h1>
          <input
            className="button-add-user"
            type="button"
            value="New User"
            onClick={() => this.setState({ count: !this.state.count })}
          />

          {/* {(() => {
            if (this.state.count == false) {
              return (
                <h3>False</h3>
              )
            }
            else {
              return (
                <h3>True</h3>
              )
            }
          })()} */}
          {this.state.count && <Popup
            content={<AddUser />}
            handleClose={() => this.setState({ count: !this.state.count })}
          />}
        </div>
        <div>
          <table>
            <tr className="HeaderTable">
              <th>Username</th>
              <th>Email</th>
              <th>Status</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
            <tbody>{this.DataTable()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
