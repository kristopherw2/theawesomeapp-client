import React from "react";
import "./UserStats.css";
import {Component} from "react";
import UpdateUserStatsForm from "./UpdateUserStatsForm";
import ShowUserStats from "./ShowUserStats";
import UserContext from "../../UserContext";
//import TokenService from "../../services/token-service";

class UserStats extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "",
            username: "",
            age: "",
            height: "",
            userweight: "",
            showUpdateStatsForm: false
        };
    }
    static contextType = UserContext;

    // componentDidMount() {
    //     if (TokenService.getAuthToken()) {
    //         const url = `http://localhost:8000/api/users/userstats`;
    //         fetch(url, {
    //             headers: {
    //                 authorization: `bearer ${TokenService.getAuthToken()}`
    //             }
    //         })
    //             .then(res => {
    //                 if (!res.ok) {
    //                     throw new Error(
    //                         "Oh, Mamma Mia! There seems to be a problem."
    //                     );
    //                 }
    //                 return res;
    //             })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 this.setState({
    //                     id: data.id,
    //                     username: data.username,
    //                     age: data.age,
    //                     height: data.height,
    //                     userweight: data.userweight
    //                 });
    //             })
    //             .catch(err => {
    //                 this.setState({
    //                     error: err.message
    //                 });
    //             });
    //     }
    // }

    handleUserUpdate = () => {
        this.setState({
            showUpdateStatsForm: !this.state.showUpdateStatsForm
        });
    };

    render() {
        const renderUpdateStatsForm =
            this.state.showUpdateStatsForm === true ? (
                <UpdateUserStatsForm switchForm={this.handleUserUpdate} />
            ) : (
                <ShowUserStats switchForm={this.handleUserUpdate} />
            );

        return <div className="userStats">{renderUpdateStatsForm}</div>;
    }
}

export default UserStats;
