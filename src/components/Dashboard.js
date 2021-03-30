import {useState}from "react";

import {format} from "date-fns";
import {startOfWeek} from "date-fns";
import {addDays} from "date-fns"
import {startOfMonth} from "date-fns"
import {endOfMonth} from "date-fns"
import {endOfWeek} from "date-fns"
import {isSameDay} from "date-fns"
import {isSameMonth} from "date-fns"
import {addMonths} from "date-fns"
import {subMonths} from "date-fns"

import ProgramComponent from './programs/ProgramComponent'
import WorkoutComponent from './workout/WorkoutComponent'



import '../CSS/Dashboard.css'


const Dashboard =() => {
    
    const [currentMonth,setCurrentMonth]=useState(new Date())

    const renderDays=()=> {
        const dayFormat = "E";
        const dateFormat = "d";
        const days = [];
    
        let startDay = startOfWeek(currentMonth);
    console.log(startDay)
        for (let i = 0; i < 7; i++) {
            let day=format(addDays(startDay, i), dayFormat)
            let date=format(new Date(), dateFormat)
          days.push(
            <div className="col col-center" key={i}>
              {day}
            </div>
          );
        }
    
        return <div className="days row">{days}</div>;
      }

    return(
        <div className="row">
              {renderDays()}
            <div className="column"></div>
            <div className="column">
            <ProgramComponent/>
            </div>
                <div className="column">
            <WorkoutComponent/>
            </div>
            <div className="column"></div>
       </div>

    );
}

export default Dashboard