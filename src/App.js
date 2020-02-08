import React from "react";
import "./App.css";
import {Component} from "react";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Landing from "./Landing/Landing";
import UserInfo from "./User-info/UserInfoMain";
import WorkoutForm from "./WorkoutForm/WorkoutForm";
import Login from "./LoginCreateUser/Login";
import CreateUser from "./LoginCreateUser/CreateUser";
import {Route, Switch} from "react-router-dom";
import UserContext from "./UserContext";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      age: "",
      height: "",
      weight: "",
    };
  }

  render() {
    return (
      <UserContext.provider
        value={{
          username: this.state.username,
          age: this.state.age,
          height: this.state.height,
          weight: this.state.weight,
        }}
      >
        <div className='app'>
          <Nav />
          <Switch>
            {/* <Route exact path='/' component={Landing} />
            <Route path='/login' component={Login} />
            <Route path='/createuser' component={CreateUser} />
            <Route path='/homepage' component={UserInfo} />
            <Route path='/workoutform' component={WorkoutForm} /> */}
          </Switch>
          <Footer />
        </div>
      </UserContext.provider>
    );
  }
}

export default App;
