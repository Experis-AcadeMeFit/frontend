import ProgramComponent from './programs/ProgramComponent'
import WorkoutComponent from './workout/WorkoutComponent'



import '../CSS/Dashboard.css'


import ExcrecisesList from './exercises/ExercisesList'

const dashboard =(props) => {
    
    

    return(
        <div className="row">
            <div className="column">
            <ProgramComponent/>
            </div>
                <div className="column">
            <WorkoutComponent/>
            </div>
        
       </div>

    );
}

export default dashboard