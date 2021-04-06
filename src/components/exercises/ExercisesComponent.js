
import { useState, useContext } from 'react'
import {  MusclesFigureContext } from './MuscleContext';

import '../../CSS/ExcersiceComponent.css'

const ExcerciseComponent = props => {

    // eslint-disable-next-line 
    const [musclegroup, setMusclegroup] = useContext( MusclesFigureContext);
    
    // eslint-disable-next-line 
    const [id, setId] = useState(props.exercises.id)
    
    // eslint-disable-next-line     
    const [name, setname] = useState(props.exercises.name)
    
    // eslint-disable-next-line 
    const [description, setDescription] = useState(props.exercises.description)
    
    // eslint-disable-next-line 
    const [muscles, setMuscles] = useState(props.exercises.targetMuscleGroup)
    const [showDetail, setShowDetail] = useState(false);



    //set selected Muscle group from list to highlight SVG figure's muscles group
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