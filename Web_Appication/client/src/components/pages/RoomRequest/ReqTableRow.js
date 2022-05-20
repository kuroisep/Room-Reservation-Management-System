import React, { Component } from 'react'
import axios from "axios";
import Popup from './Popup';

export default class ReqTableRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Name_Room: "",
            Name_Building: "",
            Name_Contributer: "",
            Status_Approve: false,
        };
    }

    componentDidMount() {
        axios.get("http://localhost:3001/readroom")
            .then((res) => {
                for (let i = 0; i < Object.keys(res.data).length; i++) {
                    const s1 = this.props.obj.ID_Room;
                    const s2 = res.data[i].id_room;
                    console.log(s1 + " and " + s2)
                    if (s1 === s2) {
                        this.setState({
                            Name_Room: res.data[i].Name,
                            Name_Building: res.data[i].Building,
                            Name_Contributer: res.data[i].Contributer,
                        })
                        break
                    }
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <tr>
                <td>{this.state.Name_Room}</td>
                <td>{this.state.Name_Building}</td>
                <td>{this.props.obj.Participant}</td>
                <td>{this.props.obj.Date_Reserve}</td>
                <td>{this.props.obj.Name_User}</td>
                <td>{this.state.Name_Contributer}</td>
                <td>
                    <input
                        type="button"
                        value="Approve"
                        onClick={() => this.setState({ Status_Approve: !this.state.Status_Approve })}
                    />
                    {this.state.Status_Approve && <Popup 
                    content={<div>จะ Approve ไหม</div>}
                    handleClose={() => this.setState({Status_Approve : !this.state.Status_Approve})}
                    />}
                </td>
            </tr>
        )
    }
}
