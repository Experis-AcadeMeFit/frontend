import { useState } from 'react'
import '../../CSS/ExcersiceComponent.css'

const ExcerciseComponent = (props) =>{
    const [id, setId] = useState(props.exercises.id)
    const [name, setname] = useState(props.exercises.name)
    const [description,setDescription]=useState(props.exercises.description)
    const [musclegroup,setMusclegroup]=useState(props.exercises.musclegroup)

const addToworkout=(e)=>{
    e.stopPropagation()
    console.log("Add shit to workout")
}


    const [showDetail, setShowDetail] = useState(false);    

    const toggle=()=> {
        setShowDetail(showDetail => !showDetail);
    }

    return(
        <div className="excercise"  onClick={toggle} data-muscl={musclegroup}>
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