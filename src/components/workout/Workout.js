import { useEffect,useContext } from 'react'
import { getWorkouts } from '../../utills/CRUD'

import WorkoutComponent from './WorkoutComponent'
import { WorkoutListContext } from '../exercises/MuscleContext';
const Workout = () => {

   // const [workoutList, setWorkoutList] = useState([]);
    const [workoutList,setWorkoutList]= useContext(WorkoutListContext);

    const fetchWorkouts = async () => {
        try {
            console.log('wuuuuu')
            const workouts = await getWorkouts();
       console.log(workouts)
            setWorkoutList(workouts);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => { fetchWorkouts(); }, []);



    return (
        <div className="">
            <ul className="Workoutlist">

                {workoutList.map((workouts, index) => <WorkoutComponent key={index} exercises={workouts} />)}
            </ul>
        </div>
    )
}
export default Workout