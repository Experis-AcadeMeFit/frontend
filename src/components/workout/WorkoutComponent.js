
import { useContext } from 'react'
import { ContributerContext } from '../exercises/MuscleContext';

import '../../CSS/WorkoutComponent.css'
import WorkoutDetail from './WorkoutDetail'
const WorkoutComponent = () => {
 // eslint-disable-next-line 
        const [contributer, setContributer] = useContext(ContributerContext);
     
        return (
                <div className="workout">

                        <div className="workouthead">
                                <p>Butt workout</p>
                                <p>{contributer}</p>
                        </div>

                        <div className="addtoGoals clearfix">
                                <button className="CTA">Add to Goals</button>
                                <div className="datepicker-toggle">
                                        <input type="date" className="datepicker-input" />
                                </div>
                        </div>

                        {contributer && (<div className="NewExercise">
                                add new Exercise<span className="addNewExercise">+</span>
                        </div>)}

                        <hr className="clearfix"></hr>

                        <div className="divider">
                                <WorkoutDetail className="workoutDetail" />

                        </div>
                        <span className="tri">▲</span>
                </div>


        )
}
export default WorkoutComponent