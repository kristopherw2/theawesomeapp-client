import React from "react";
import "./UserStats.css";
import {Component} from "react";
import UpdateUserStatsForm from "./UpdateUserStatsForm";
import ShowUserStats from './ShowUserStats'
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
      showUpdateStatsForm: false,
    };
  }
  static contextType = UserContext;

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
          userweight: data.userweight,
        });
        this.context.handleUserStatsUpdate(data);
      })
      .catch(err => {
        this.setState({
          error: err.message,
        });
      });
  }

  handleUserUpdate = () => {
    this.setState({
      showUpdateStatsForm: !this.state.showUpdateStatsForm,
    });
  };

  render() {
    const renderUpdateStatsForm =
      this.state.showUpdateStatsForm === true ? (
        <UpdateUserStatsForm switchForm={this.handleUserUpdate} />
      ) :  <ShowUserStats switchForm={this.handleUserUpdate}/>

    console.log(this.state.showUpdateStatsForm);

    return (
      <div className='userStats'>{renderUpdateStatsForm}</div>

    );
  }
}

export default UserStats;
