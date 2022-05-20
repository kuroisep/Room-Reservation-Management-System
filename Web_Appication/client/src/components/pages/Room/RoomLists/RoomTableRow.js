
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Popup from '../../User/UserList/AddUserPopup'

export default class RoomTableRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      UpdatePage: false,
      deleteroom : false,
    };
  }

    deleteRoom = () => {
        console.log(this.props.obj._id)
        axios.delete('http://localhost:3001/deleteroom/' + this.props.obj._id).then((res) => {
            console.log('Room successfully deleted');
        }).catch((error) => {
            console.log(error)
        })
    }

  render() {
    return (
      <tr>
          <td><img src="#" alt="Room Image"/></td>
          <td>{this.props.obj.Name}</td>

          <td>{this.props.obj.Contributer}</td>
          <td>{this.props.obj.Building}</td>
          <td>
            <Link className="" to={"/update-room/"}>
                Edit
            </Link>
            <input 
            type="button" 
            value="Delete"  
            onClick={() => this.setState({deleteroom : !this.state.deleteroom})}
           />  
            {this.state.deleteroom && <Popup 
              content={<div>ต้องการที่จะลบหรือไม่ {this.props.obj.Name} หรือไม่<button onClick={this.deleteRoom}> Delete</button></div>} 
              handleClose={() => this.setState({deleteroom : !this.state.deleteroom})}  
           />}  
          </td>  
      </tr>
    )
  }
}
