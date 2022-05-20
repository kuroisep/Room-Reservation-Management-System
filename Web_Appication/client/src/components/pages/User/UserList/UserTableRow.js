
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Popup from './AddUserPopup'
import UpdateUser from '../../UpdateUser/UpdateUser';

export default class UserTableRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      UpdatePage: false,
      deleteuser : false,
    };
  }

  deleteStudent = () => {
    console.log(this.props.obj._id)
    axios.delete('http://localhost:3001/deleteuser/' + this.props.obj._id).then((res) => {
      console.log('Student successfully deleted');
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.user}</td>

        <td>{this.props.obj.Email}</td>
        <td>{this.props.obj.Status}</td>
        <td>{this.props.obj.Role}</td>
        <td>
          <input
            type="button"
            value="Update"
            onClick={() => this.setState({ UpdatePage: !this.state.UpdatePage })}
          />
          {this.state.UpdatePage && <Popup
            content={<UpdateUser idobj={this.props.obj._id} />}
            handleClose={() => this.setState({ UpdatePage: !this.state.UpdatePage })}
          />}

          <input 
            type="button" 
            value="Delete"  
            onClick={() => this.setState({deleteuser : !this.state.deleteuser})}
           />
           {this.state.deleteuser && <Popup 
              content={<div>ต้องการที่จะลบหรือไม่คุณ {this.props.obj.firstname} หรือไม่<button onClick={this.deleteStudent}> Delete</button></div>} 
              handleClose={() => this.setState({deleteuser : !this.state.deleteuser})}  
           />}
        </td>
      </tr>
    )
  }
}


// class Update extends Component{
//   setID = () => {
//     const ids = this.props.obj._id;
//     return ids;
//   }
  

//   render() {
//     return (
//       <h1>{setID}</h1>
//     )
//   }
// }