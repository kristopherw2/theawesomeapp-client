import TokenService from './token-service'
import config from '../config'

postWorkout(workoutname, userid) {
  return fetch(`${config.API_ENDPOINT}/workouts`) 
}