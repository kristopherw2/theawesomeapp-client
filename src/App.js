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
import {Route} from "react-router-dom";
import UserContext from "./UserContext";
import ExercisesList from "./PastWorkouts/ExercisesList/ExercisesList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      username: "",
      age: "",
      height: "",
      weight: "",
    };
  }

  handUserStatsUpdate = userstats => {
    console.log(`userstats in app js ${userstats}`)
    this.setState( {
      id: userstats.id,
      username: userstats.username,
      age: userstats.age,
      height: userstats.height,
      weight: userstats.weight
    })
  }

  handleUserLogin = username => {
    this.setState({
      id: username.id,
      username: username.username,
    });
  };

  /* console.log(`APP MOTHER FUCKING JS ${user}`); */

  render() {
    return (
      <UserContext.Provider
        value={{
          id: this.state.id,
          username: this.state.username,
          age: this.state.age,
          height: this.state.height,
          weight: this.state.weight,
          handleUserLogin: this.handleUserLogin,
          handleUserStatsUpdate: this.handUserStatsUpdate
        }}
      >
        <div className='app'>
          <main>
            <Nav />
            <Route exact path='/' component={Landing} />
            <Route path='/login' component={Login} />
            <Route path='/createuser' component={CreateUser} />
            <Route path='/homepage' component={UserInfo} />
            <Route path='/workoutform' component={WorkoutForm} />
            <Route path='/excerciselist' component={ExercisesList} />
            <Footer />
          </main>
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
