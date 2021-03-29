import { useState, useEffect } from 'react'
import { getExercises } from '../../utills/ExercisesCRUD'
import ExercisesComponent from './ExercisesComponent'

const ExcrecisesList=()=>{
    
    const [exerciseslist, setExerciseslist] = useState([]);
    

     const fetchExercises = async() => {
        try {
            
            const exercises = await getExercises();
            setExerciseslist(exercises.message.exercises);
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => { fetchExercises(); }, []);
  

    return(
        <div className="exlist">
            <ul className="exlist"> 
            {exerciseslist.map((exercises, index) => <ExercisesComponent key={index} exercises={exercises}/>)}
            </ul>
        </div>
    )

}

export default ExcrecisesList
//li key={index}>{exercises.name} {exercises.musclegroup[3]}</li>