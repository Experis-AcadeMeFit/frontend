
import WorkoutDetailComponent from './WorkoutDetailComponent'

const Workoutdetail=props=>{
let detail=props.detail;
console.log(detail)
    return(
      <ul className="exlist">
   {detail.map((details, index) => <WorkoutDetailComponent key={index} detail={details} order={index}/>)}
    </ul>
    )
}

export default Workoutdetail