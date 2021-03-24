
import axios from 'axios'
import {API_URL,API_EXERCISES} from './APICalls'
    
export const getExercises = () => {
        return axios.get(API_URL+API_EXERCISES)
            .then(response => response.data)
            .catch((error) => {
                console.log(error);
            })
    }

 