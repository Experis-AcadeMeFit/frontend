import { useState, useEffect, useContext } from 'react'
import { getExercises } from '../../utills/ExercisesCRUD'
import ExercisesComponent from './ExercisesComponent'
import { MusclesListContext } from './MuscleContext';

const ExcrecisesList = () => {


    const [exerciseslist, setExerciseslist] = useState([]);
    // eslint-disable-next-line 
    const [musclesList, setMusclesList] = useContext(MusclesListContext);

    const fetchExercises = async () => {
        try {

            const exercises = await getExercises();
            setExerciseslist(exercises.message.exercises);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => { fetchExercises(); }, []);

    //a muscles group have been clicked in the SVG figure now sort the excercise List
    const sortExcerciseList = (sortOn) => {
        let classname = document.getElementsByClassName('excercise');

        let divs = [];
        for (var i = 0; i < classname.length; ++i) {
            divs.push(classname[i]);
        }
        divs.sort(function (a, b) {
            var an = a.getAttribute('data-muscl'),
                bn = sortOn;

            if (an !== bn)
                return 1;
            if (an === bn)
                return -1;
                return 0;
        });


        let ul = document.querySelector(".exlist");

        divs.forEach(function (el) {
            ul.appendChild(el);
        });


    }

    //a muscles group have been clicked in the SVG figure now sort the excercise List
    useEffect(() => {
        sortExcerciseList(musclesList);
    }, [musclesList]);


    return (

        <div className="">
            <ul className="exlist">
                {exerciseslist.map((exercises, index) => <ExercisesComponent key={index} exercises={exercises} />)}
            </ul>
        </div>
    )

}

export default ExcrecisesList
