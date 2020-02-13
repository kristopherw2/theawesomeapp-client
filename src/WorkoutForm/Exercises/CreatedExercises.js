import React from "react";
import {Component} from "react";
//import {Link} from "react-router-dom";
import UserContext from '../../UserContext'

class CreatedExercises extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    static contextType = UserContext;

    render() {

        const exercisesArray = this.context.exercisesArray.map(item => item )
        return (
            <div>
                Test this out
            </div>
        )
    }
}

export default CreatedExercises