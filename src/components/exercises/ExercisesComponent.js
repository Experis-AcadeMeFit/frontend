
import { useState, useEffect,useRef, useContext } from 'react'
import {  MusclesFigureContext,MusclesListContext } from './MuscleContext';

import '../../CSS/ExcersiceComponent.css'

const ExcerciseComponent = props => {

    const [musclegroup, setMusclegroup] = useContext( MusclesFigureContext);
    const [musclesList, setMusclesList] = useContext(MusclesListContext);

    const [id, setId] = useState(props.exercises.id)
    const [name, setname] = useState(props.exercises.name)
    const [description, setDescription] = useState(props.exercises.description)
    const [muscles, setMuscles] = useState(props.exercises.musclegroup[0])
    const [showDetail, setShowDetail] = useState(false);



//get selected Muscle group from list
    const updateMusclegroup=(e)=> {

        if (e.target && e.target !== undefined) {
            setMusclegroup(prevState => {
                return e.target.getAttribute('data-muscl');
            });
        }
    }


    const addToworkout = (e) => {
        e.stopPropagation()
        console.log("Add shit to workout")
    }

//show hide excercise detail
    const toggle = () => {
        setShowDetail(showDetail => !showDetail);
       
    }

    return (
        <div className="excercise" onClick={toggle} data-muscl={muscles} onMouseEnter={(e) => updateMusclegroup(e)} onMouseLeave={(e) => updateMusclegroup(e)}>
            <div className="excercisehead">
                <p>{name}</p>
            </div>

            <div className="addtoWorkout clearfix">
                <button className="CTA" onClick={addToworkout}>Add to Workout</button>
            </div>

            <div className="excerciseDetail" style={{ display: showDetail ? "block" : "none" }}>
                <h4>{name}</h4>
                <p>
                    {description}
                </p>
            </div>

        </div>
    )
}
export default ExcerciseComponent