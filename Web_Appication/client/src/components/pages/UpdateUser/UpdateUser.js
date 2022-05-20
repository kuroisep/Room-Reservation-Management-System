import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import axios, { Axios } from 'axios'

export default class UpdateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      pass: "",
      firstname: "",
      lastname: "",
      age: "",
      Email: "",
      Status: "",
      institute: "",
      role: "",

    };
  }


  componentDidMount() {
    axios.get("http://localhost:3001/readuser")
      .then((res) => {
        for (let i = 0; i < Object.keys(res.data).length; i++) {
          console.log(this.props.idobj)
          const s1 = this.props.idobj;
          const s2 = res.data[i]._id
          if (s1 === s2) {
            console.log("Match : " + s2);
            this.setState({
              user: res.data[i].user,
              pass: res.data[i].pass,
              firstname: res.data[i].firstname,
              lastname: res.data[i].lastname,
              age: res.data[i].age,
              Email: res.data[i].Email,
              Status: res.data[i].Status,
              institute: res.data[i].institute,
              role: res.data[i].role,
            })
            break
          }
          
        }

        this.setState({

        })
      })
      .catch((error) => {
        console.log(error);
      });
  }


  UpdateUsertoDatabase = () => {
    axios.put("http://localhost:3001/updateuser", { newPass: this.state.pass, newFirstName: this.state.firstname, newLastName: this.state.lastname, newAge: this.state.age , id : this.props.idobj}).then(() => {
      console.log(this.props.idobj)
      console.log("Update Success")
    }).catch =(err) => {
      console.log(err)
    }
  }


  render() {
    return (
      <div>Update user
        <input
          type="text"
          placeholder={this.state.pass}
          onChange={(event) => {
            this.setState.pass = event.target.value
          }}
        />
        <input
          type="text"
          placeholder={this.state.firstname}
          onChange={(event) => {
            this.setState.firstname = event.target.value
          }}
        />
        <input
          type="text"
          placeholder={this.state.lastname}
          onChange={(event) => {
            this.setState.lastname = event.target.value
          }}
        />
        <input
          type="text"
          placeholder={this.state.age}
          onChange={(event) => {
            this.setState.age = event.target.value
          }}
        />
        <button onClick={this.UpdateUsertoDatabase}>Update!!</button>
      </div>
    )
  }
}