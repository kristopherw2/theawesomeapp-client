import React from "react";
import {Component} from "react";
//import {Link} from "react-router-dom";
import UserContext from '../../UserContext'

class CreatedExercises extends Component {
    constructor(props){
        super(props)

        this.state = {
            exercisesArray: []
        }
    }

    static contextType = UserContext;

    handleDelete = exerciseid => {
        console.log(exerciseid)
        let newExercisesArray = [];
        this.context.exercisesArray.filter(item => {
        return item.exerciseid !== exerciseid ? newExercisesArray.push(item) : null;
        });
    ;
    
        const url = `http://localhost:8000/api/exercises/${exerciseid}`;
        const options = {
        method: "DELETE",
        };
    
        fetch(url, options)
        .then(res => {
            if (!res.ok) {
            throw new Error("Oh, Mamma Mia! There seems to be a problem.");
            }
            return res;
        })
        .then(data => {
            this.context.handleDeleteExercise(newExercisesArray)
            this.setState({
                workoutsArray: data
            })
        })
        .catch(err => {
            this.setState({
            error: err.message,
            });
        });
    };

    render() {

        const newExerciseDisplay = this.context.exercisesArray
        console.log(this.context.exercisesArray)

        const exercisesArray = newExerciseDisplay.map((item, index) => {
            console.log(item)
            return (
                    <ul>
                        <li key={index}>Name: {item.exercisename}</li>
                        <li key={index+1}>Sets: {item.sets}</li>
                        <li key={index+2}>Weight lbs: {item.exerciseweight} total</li>
                        <li key={index+3}> Time: {item.time} seconds</li>
                        <li key={index+4}>Calories: {item.caloriesburned}</li>
                        <button onClick={() => this.handleDelete(item.exerciseid)}>Delete</button>
                    </ul>
                    
            )
        } ) 

        return ( 
            <div className='results-container'>
                {exercisesArray} 
            </div>
        )
    }
}

export default CreatedExercises