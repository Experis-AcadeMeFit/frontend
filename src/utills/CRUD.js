
import axios from 'axios'
import { API_URL, API_EXERCISES, API_WORKOUTS } from './APICalls'

export const getExercises = () => {
    return axios.get(API_URL + API_EXERCISES)
        .then(response => response.data)
        .catch((error) => {
            console.log(error);
        })
}

export const getExercisesById = (idNum) => {
    return axios.get(API_URL + API_EXERCISES + idNum)
        .then(response => response.data)
        .catch((error) => {
            console.log(error);
        })
}

export const updateExercises = (idNum, req) => {
    console.log(API_URL + API_EXERCISES + idNum, req)
    return axios.patch(API_URL + API_EXERCISES + idNum, req)
        .then(response => response.data)
        .catch((error) => {
            console.log(error);
        })
}

export const createExercises = (req) => {
    return axios.post(API_URL + API_EXERCISES, req)
        .then(response => response.status)
        .catch((error) => {
            console.log(error);
        })
}

export const deleteExercises = (idNum) => {
    return axios.delete(API_URL+API_EXERCISES+idNum)
        .then(response => response)
        .catch((error) => {
            console.log(error);
        })
}


export const getWorkouts = () => {
    return axios.get(API_URL + API_WORKOUTS)
        .then(response => response.data)
        .catch((error) => {
            console.log(error);
        })
}

