import React from "react";
import "./App.css";
import {Component} from "react";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Landing from "./Landing/Landing";
import UserInfo from "./User-info/UserInfoMain";
import WorkoutForm from "./WorkoutForm/Workouts/WorkoutForm";
import Login from "./LoginCreateUser/Login";
import CreateUser from "./LoginCreateUser/CreateUser";
import {Route} from "react-router-dom";
import UserContext from "./UserContext";
import ExercisesList from "./PastWorkouts/PastExercisesList/ExercisesList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      username: "",
      age: "",
      height: "",
      userweight: "",
      workoutid: "",
      workoutname: "",
      showWorkoutForm: true,
      workoutsArray: [],
      exercisesArray: [],
      exercisename: '',
      sets: '',
      repetitions: '',
      exerciseweight: '',
      time: '', 
      caloriesburned: '',
    };
  }


  handUserStatsUpdate = userstats => {
    this.setState({
      id: userstats.id,
      username: userstats.username,
      age: userstats.age,
      height: userstats.height,
      userweight: userstats.userweight,
    });
  };

  handleUserLogin = username => {
    this.setState({
      id: username.id,
      username: username.username,
    });
  };

  handleCreateWorkout = workout => {
    this.setState({
      workoutid: workout.workoutid,
      workoutname: workout.workoutname,
      showWorkoutForm: false,
    });
  };

  handleWorkoutsArrayUpdate = workout => {
    this.setState({
      workoutsArray: [...workout],
    });
  };

  handleExercisesArrayUpdate = exercises => {
    console.log(exercises)
    this.setState({
      exercisesArray: [...this.state.exercisesArray, ...exercises]
    })
  };

  handleDeleteExercise = exercises => {
    this.setState({
      exercisesArray: [...exercises]
    })
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          id: this.state.id,
          username: this.state.username,
          age: this.state.age,
          height: this.state.height,
          userweight: this.state.userweight,
          workoutid: this.state.workoutid,
          handleUserLogin: this.handleUserLogin,
          handleUserStatsUpdate: this.handUserStatsUpdate,
          handleCreateWorkout: this.handleCreateWorkout,
          showWorkoutForm: this.state.showWorkoutForm,
          workoutsArray: this.state.workoutsArray,
          exercisesArray: this.state.exercisesArray,
          handleWorkoutsArrayUpdate: this.handleWorkoutsArrayUpdate,
          exercisename: this.state.exercisename,
          sets: this.state.sets,
          repetitions: this.state.repetitions,
          exerciseweight: this.state.exerciseweight,
          time: this.state.time, 
          caloriesburned: this.state.caloriesburned,
          handleExercisesArrayUpdate: this.handleExercisesArrayUpdate,
          handleDeleteExercise: this.handleDeleteExercise
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
