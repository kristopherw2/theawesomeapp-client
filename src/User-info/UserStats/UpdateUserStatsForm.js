import React from "react";
import "./UserStats.css";
import {Component} from "react";
import UserContext from "../../UserContext";

class UpdateUserStatsForm extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    static contextType = UserContext

    componentDidMount() {
        const url = `http://localhost:8000/api/users/${this.context.id}`;
    
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Oh, Mamma Mia! There seems to be a problem.");
                }
                return res;
            })
            .then(res => res.json())
            .then(data => {
            this.setState({
                id: data.id,
                username: data.username,
                age: data.age,
                height: data.height,
                userweight: data.userweight
            })
            this.context.handleUserStatsUpdate(data)
            })
            .catch(err => {
                this.setState({
                error: err.message,
                });
            });
        }

        swithUserStatsDisplay = () => {
            this.props.switchForm()
        }

    render() {
        console.log(this.context.userweight)
        return (
                <ul>
                <li>Username: {this.state.username}</li>
                <li>Age: {this.state.age}</li>
                <li>Height: {this.state.height}</li>
                <li>Weight: <input type="text"/></li>
                <button onClick={this.swithUserStatsDisplay}>Submit Weight</button>
                </ul>
                
        )
    }
};


export default UpdateUserStatsForm