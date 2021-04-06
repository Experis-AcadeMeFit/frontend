
import axios from 'axios'
import {API_URL,API_EXERCISES,API_WORKOUTS} from './APICalls'
    
export const getExercises = () => {
        return axios.get(API_URL+API_EXERCISES)
            .then(response => response.data)
            .catch((error) => {
                console.log(error);
            })
    }
    
    export const getExercisesById = (idNum) => {
        return axios.get(API_URL+API_EXERCISES+idNum)
            .then(response => response.data)
            .catch((error) => {
                console.log(error);
            })
    }


export const getWorkouts = () => {
        return axios.get(API_URL+API_WORKOUTS)
            .then(response => response.data)
            .catch((error) => {
                console.log(error);
            })
    }

 