import React from "react";
import "./UserStats.css";
import {Component} from "react";
import UpdateUserStatsForm from "./UpdateUserStatsForm";
import ShowUserStats from "./ShowUserStats";
import UserContext from "../../UserContext";

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
