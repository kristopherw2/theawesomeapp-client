import React from "react";
import "./App.css";
import "./Components/Nav/Nav.css";
import {Component} from "react";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Landing from "./Landing/Landing";
import UserInfo from "./User-info/UserInfoMain";
import WorkoutForm from "./WorkoutForm/Workouts/WorkoutForm";
import Login from "./LoginCreateUser/Login";
import CreateUser from "./LoginCreateUser/CreateUser";
import {Route, Switch} from "react-router-dom";
import UserContext from "./UserContext";
import ExercisesList from "./PastWorkouts/PastExercisesList/ExercisesList";
import PublicOnlyRoute from "./Utils/PublicRouteOnly";
import PrivateRoute from "./Utils/PrivateRoute";
import PageNotFound from "./Components/PageNotFound";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      age: "",
      height: "",
      userweight: "",
      workoutid: "",
      //workoutname: "",
      showWorkoutForm: true,
      workoutsArray: [],
      exercisesArray: [],
      exercisename: "",
      workoutIdArray: [],
      sets: "",
      repetitions: "",
      exerciseweight: "",
      time: "",
      caloriesburned: "",
    };
  }
  /* MOVE METHODS INTO STATE TO CLEAN CONTEXT */

  handleLogOut = () => {
    localStorage.clear();
  };

  handUserStatsUpdate = userstats => {
    this.setState({
      id: userstats.id,
      username: userstats.username,
      age: userstats.age,
      height: userstats.height,
      userweight: userstats.userweight,
    });
  };

  handleUserWeightUpdate = weight => {
    this.setState({
      userweight: weight.userweight,
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
    this.setState({
      exercisesArray: [...this.state.exercisesArray, ...exercises],
    });
  };

  handleDeleteExercise = exercises => {
    this.setState({
      exercisesArray: [...exercises],
    });
  };

  handleResetWorkoutForm = () => {
    this.setState({
      workoutid: "",
      workoutname: "",
      exercisesArray: [],
      showWorkoutForm: true,
    });
  };

  handleWorkoutIdArrayUpdate = workoutid => {
    this.setState({
      workoutIdArray: workoutid,
    });
  };

  render() {
    return (
        <UserContext.Provider
            value={{
                username: this.state.username,
                age: this.state.age,
                height: this.state.height,
                userweight: this.state.userweight,
                workoutid: this.state.workoutid,
                showWorkoutForm: this.state.showWorkoutForm,
                workoutsArray: this.state.workoutsArray,
                workoutIdArray: this.state.workoutIdArray,
                exercisesArray: this.state.exercisesArray,
                exercisename: this.state.exercisename,
                sets: this.state.sets,
                repetitions: this.state.repetitions,
                exerciseweight: this.state.exerciseweight,
                time: this.state.time,
                caloriesburned: this.state.caloriesburned,
                handleExercisesArrayUpdate: this.handleExercisesArrayUpdate,
                handleDeleteExercise: this.handleDeleteExercise,
                handleResetWorkoutForm: this.handleResetWorkoutForm,
                handleUserWeightUpdate: this.handleUserWeightUpdate,
                handleWorkoutIdArrayUpdate: this.handleWorkoutIdArrayUpdate,
                handleLogOut: this.handleLogOut,
                handleUserStatsUpdate: this.handUserStatsUpdate,
                handleCreateWorkout: this.handleCreateWorkout,
                handleWorkoutsArrayUpdate: this.handleWorkoutsArrayUpdate
            }}
        >
            <div className="app">
                <main>
                    <Nav />
                    <Switch>
                        <Route exact path={"/"} component={Landing} />
                        <PublicOnlyRoute path={"/login"} component={Login} />
                        <PublicOnlyRoute
                            path={"/createuser"}
                            component={CreateUser}
                        />
                        <PrivateRoute path={"/homepage"} component={UserInfo} />
                        <PrivateRoute
                            path={"/workoutform"}
                            component={WorkoutForm}
                        />
                        <PrivateRoute
                            path={"/exerciselist"}
                            component={ExercisesList}
                        />
                        <Route component={PageNotFound} />
                    </Switch>
                    <Footer />
                </main>
            </div>
        </UserContext.Provider>
    );
  }
}

export default App;
