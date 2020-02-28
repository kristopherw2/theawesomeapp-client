import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../UserContext";
import CreatedExercises from "./CreatedExercises";
import TokenService from "../../services/token-service";
import "./ExerciseForm.css";

class ExcerciseForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            exercisename: "",
            sets: "",
            repetitions: "",
            exerciseweight: "",
            time: "",
            caloriesburned: "",
            workoutid: "",
            userid: "",
            metValue: 5,
            kgValue: 0.453592
        };
    }

    static contextType = UserContext;

    updateExerciseName = letter => {
        this.setState({
            exercisename: letter
        });
    };

    updateSets = letter => {
        this.setState({
            sets: letter
        });
    };

    updateRepetitions = letter => {
        this.setState({
            repetitions: letter
        });
    };

    updateExerciseWeight = letter => {
        this.setState({
            exerciseweight: letter
        });
    };

    //Update exercise time
    updateTime = letter => {
        this.setState({
            time: letter
        });
    };

    //converts MET value for calories burnd NEEDS TO EVENTUALLY BE DYNAMIC USING AN AVERAGE RIGHT NOW
    convertMETCaloriesBurned = e => {
        e.preventDefault();
        let convertUserWeight = Math.floor(
            parseInt(this.context.userweight, 10) / this.state.kgValue
        );
        let convertSecondsToMinutes = parseInt(this.state.time, 10) / 60;
        let calculatedValueForCalories = Math.floor(
            (convertSecondsToMinutes *
                (this.state.metValue * 3.5 * convertUserWeight)) /
                200
        );
        this.setState(
            {
                caloriesburned: calculatedValueForCalories,
                workoutid: this.context.workoutid,
                userid: this.context.id
            },
            () => {
                this.handlePostToExercise();
            }
        );
    };

    //handles Post for exercises
    handlePostToExercise() {
        const {
            exercisename,
            sets,
            repetitions,
            exerciseweight,
            time,
            caloriesburned,
            workoutid
        } = this.state;
        const newExercise = {
            exercisename,
            sets,
            repetitions,
            exerciseweight,
            time,
            caloriesburned,
            workoutid
        };
        const url = `http://localhost:8000/api/exercises/create`;
        const options = {
            method: "POST",
            body: JSON.stringify(newExercise),
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${TokenService.getAuthToken()}`
            }
        };

        fetch(url, options)
            .then(res => {
                if (!res.ok) {
                    throw new Error(
                        "Oh, Mamma Mia! There seems to be a problem."
                    );
                }
                return res.json();
            })
            .then(data => {
                this.context.handleExercisesArrayUpdate(data);
            })
            .catch(err => {
                this.setState({
                    error: err.message
                });
            });
    }

    handleReset = () => {
        this.form.reset();
        this.setState({
            exercisesArray: []
        });
    };

    render() {
        const renderCreatedExercises =
            this.context.exercisesArray.length === 0 ? null : (
                <CreatedExercises />
            );
        return (
            <div>
                <form
                    className="exercise-form"
                    onSubmit={e => this.convertMETCaloriesBurned(e)}
                >
                    <section className="exercise-form-main">
                        <label
                            className="exercise-form-label"
                            htmlFor="exercisename"
                        >
                            Exercise Name:
                        </label>
                        <input
                            className="exercise-form-input"
                            type="text"
                            id="exercisename"
                            required
                            onChange={e =>
                                this.updateExerciseName(e.target.value)
                            }
                        />
                        <label className="exercise-form-label" htmlFor="sets">
                            Sets:
                        </label>
                        <input
                            className="exercise-form-input"
                            type="text"
                            id="sets"
                            required
                            onChange={e => this.updateSets(e.target.value)}
                        />
                        <label className="exercise-form-label" htmlFor="reps">
                            Reps:
                        </label>
                        <input
                            className="exercise-form-input"
                            type="text"
                            id="reps"
                            required
                            onChange={e =>
                                this.updateRepetitions(e.target.value)
                            }
                        />
                        <label className="exercise-form-label" htmlFor="weight">
                            Weight lbs:
                        </label>
                        <input
                            className="exercise-form-input"
                            type="number"
                            id="weight"
                            required
                            onChange={e =>
                                this.updateExerciseWeight(e.target.value)
                            }
                        />
                        <label className="exercise-form-label" htmlFor="time">
                            Time Seconds:
                        </label>
                        <input
                            id="time"
                            className="exercise-form-input"
                            type="number"
                            required
                            onChange={e => this.updateTime(e.target.value)}
                        />
                    </section>
                    <section className="exercise-btn-ctn">
                        <button className="submit-btn btn">Submit</button>

                        <Link to={"/homepage"}>
                            <button
                                className="home-btn btn"
                                onClick={() =>
                                    this.context.handleResetWorkoutForm()
                                }
                            >
                                Done
                            </button>
                        </Link>
                    </section>
                </form>
                {renderCreatedExercises}
            </div>
        );
    }
}

export default ExcerciseForm;
