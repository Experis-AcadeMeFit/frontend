
import { useState, useContext } from 'react'
import {  MusclesFigureContext,ContributerContext } from './MuscleContext';
import {updateExercises} from '../../utills/CRUD'
import '../../CSS/ExcersiceComponent.css'

const ExcerciseComponent = props => {
     // eslint-disable-next-line 
    const [contributer, setContributer] = useContext(ContributerContext);

    const [inputDisabled, setInputDisabled] = useState(true)
    const [exName,setExname]=useState(props.exercises.name)
    const [description, setDescription] = useState(props.exercises.description)


    // eslint-disable-next-line 
    const [musclegroup, setMusclegroup] = useContext( MusclesFigureContext);
    
    // eslint-disable-next-line 
    const [id, setId] = useState(props.exercises.id)
    

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
        if(inputDisabled){
        setShowDetail(showDetail => !showDetail);
        }
    }
    const onNameChange = (e) => {
        const exName = e.target.value;
        setExname(exName);
    };

    const onDescriptionChange = (e) => {
        const description = e.target.value;
        setDescription(description);
    };

    
    const onMusclesChange = (e) => {
        const muscles = e.target.value;
        setMuscles(muscles);
    };
    const changeSettings = (e) => {
        e.preventDefault();

        const inputs = document.querySelectorAll('input')
  
        if (inputs[0].className === "") {
            setInputDisabled(false)
            inputs.forEach(input => {
                input.classList.add("inputEnabled");
                input.disabled = {inputDisabled}
            });

        } else {
            inputs.forEach(input => {
                setInputDisabled(true)
                input.classList.remove("inputEnabled")
                input.disabled = {inputDisabled}
                let req={
                    id:id,
                    name:exName,
                    description:description,
                    targetMuscleGroup:muscles,
                    image:null,
                    videoUrl:null,
                }
                updateExercises(id,req)
            });
        }

    }
    //updateExercises
    /**    "name": "Lying leg curls",
    "description": "Never skip leg day",
    "targetMuscleGroup": "Hamstring",
    "image": null,
    "videoUrl": null */

    return (
        <div className="excercise" onClick={toggle} data-muscl={muscles} onMouseEnter={(e) => updateMusclegroup(e)} onMouseLeave={(e) => updateMusclegroup(e)}>
            <div className="excercisehead">
            <input
                    className='exname'
                    type='text'
                    placeholder={'wuub'}
                    onChange={onNameChange}
                    value={exName}
                    disabled={inputDisabled}
                />
             
            </div>

            <div className="addtoWorkout clearfix">
     {contributer && <button className="exCTA editCTA" onClick={changeSettings}>Edit Workout</button>}
                <button className="exCTA" onClick={addToworkout}>Add to Workout</button>
            </div>
           
            <div className="excerciseDetail" style={{ display: showDetail ? "block" : "none", pointerEvents: showDetail ? "none":"pointer" }}>
                <h4>{exName}</h4>
             
                <input
                    id='exdescription'
                    type='text'
                    placeholder={'wuub'}
                    onChange={onDescriptionChange}
                    value={description}
                    disabled={inputDisabled}
                />
                    <input
                    id='exmuscles'
                    type='text'
                    placeholder={'wuub'}
                    onChange={onMusclesChange}
                    value={muscles}
                    disabled={inputDisabled}
                />
            </div>

        </div>
    )
}
export default ExcerciseComponent