import ProgramComponent from './programs/ProgramComponent'
import WorkoutComponent from './workout/WorkoutComponent'
import '../CSS/Dashboard.css'


import ExcrecisesList from './exercises/ExercisesList'

const dashboard =(props) => {
//const curUse=props.currentUser.user;
    return(
        <div className="row">
                 <div className="column">
            <ProgramComponent/>
            </div>
                <div className="column">
         <WorkoutComponent/>
            </div>
            <div className="column">
            <ExcrecisesList/>
            </div>
        
       </div>

    );
}

export default dashboard