import { useState, useEffect } from 'react'
import { getExercises } from '../../utills/ExercisesCRUD'

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
        <div>
            <h4>exercises</h4>
            <ul> 
            {exerciseslist.map((exercises, index) => <li key={index}>{exercises.name}</li>)}
            </ul>
        </div>
    )

}

export default ExcrecisesList