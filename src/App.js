import React from "react";
import "./App.css";
import { Component } from "react";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Landing from "./Landing/Landing";
import UserInfo from "./User-info/UserInfoMain";
import WorkoutForm from "./WorkoutForm/Workouts/WorkoutForm";
import Login from "./LoginCreateUser/Login";
import CreateUser from "./LoginCreateUser/CreateUser";
import { Route, Switch } from "react-router-dom";
import UserContext from "./UserContext";
import ExercisesList from "./PastWorkouts/PastExercisesList/ExercisesList";
import PublicOnlyRoute from "./Utils/PublicRouteOnly";
import PrivateRoute from "./Utils/PrivateRoute";
import PageNotFound from "./Components/PageNotFound";
//import TokenService from "./services/token-service";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            age: "",
            height: "",
            userweight: "",
            workoutid: "",
            workoutname: "",
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
            token: null
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
            userweight: userstats.userweight
        });
    };

    handleUserWeightUpdate = weight => {
        this.setState({
            userweight: weight.userweight
        });
    };

    handleUserLogin = token => {
        this.setState({
            token: true
        });
    };

    handleCreateWorkout = workout => {
        this.setState({
            workoutid: workout.workoutid,
            workoutname: workout.workoutname,
            showWorkoutForm: false
        });
    };

    handleWorkoutsArrayUpdate = workout => {
        this.setState({
            workoutsArray: [...workout]
        });
    };

    handleExercisesArrayUpdate = exercises => {
        this.setState({
            exercisesArray: [...this.state.exercisesArray, ...exercises]
        });
    };

    handleDeleteExercise = exercises => {
        this.setState({
            exercisesArray: [...exercises]
        });
    };

    handleResetWorkoutForm = () => {
        this.setState({
            workoutid: "",
            workoutname: "",
            exercisesArray: [],
            showWorkoutForm: true
        });
    };

    handleWorkoutIdArrayUpdate = workoutid => {
        this.setState({
            workoutIdArray: workoutid
        });
    };

    // componentDidMount() {
    //     console.log(`this is running in app`)
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

    render() {
        console.log(this.state.token);
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
                    handleDeleteExercise: this.handleDeleteExercise,
                    handleResetWorkoutForm: this.handleResetWorkoutForm,
                    handleUserWeightUpdate: this.handleUserWeightUpdate,
                    workoutIdArray: this.state.workoutIdArray,
                    handleWorkoutIdArrayUpdate: this.handleWorkoutIdArrayUpdate,
                    handleLogOut: this.handleLogOut,
                    token: this.state.token
                }}
            >
                <div className="app">
                    <main>
                        <Nav />
                        <Switch>
                            <Route exact path={"/"} component={Landing} />
                            <PublicOnlyRoute
                                path={"/login"}
                                component={Login}
                            />
                            <PublicOnlyRoute
                                path={"/createuser"}
                                component={CreateUser}
                            />
                            <PrivateRoute
                                path={"/homepage"}
                                component={UserInfo}
                            />
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
