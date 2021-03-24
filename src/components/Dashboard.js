import Calendar from './Calendar'
import ExcrecisesList from './exercises/ExercisesList'

import '../CSS/Dashboard.css'
const dashboard =(props) => {
//const curUse=props.currentUser.user;
    return(
        <div className="row">
                 <div className="column">
            <Calendar />
            </div>
                <div className="column">
            
            <ExcrecisesList/>
            </div>
       
        
       </div>

    );
}

export default dashboard