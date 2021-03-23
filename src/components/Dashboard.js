import Calendar from './Calendar'

import '../CSS/Dashboard.css'
const dashboard =(props) => {
const curUse=props.currentUser.user;
    return(
        <div className="row">
                 <div className="column">
            <Calendar />
            </div>
                <div className="column">
            </div>
       
        
       </div>

    );
}

export default dashboard