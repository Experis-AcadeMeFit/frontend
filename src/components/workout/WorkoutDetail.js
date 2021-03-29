import {useState} from 'react'
import '../../CSS/WorkoutDetail.css'

const Workoutdetail=()=>{



    const [inputDisabled, setInputDisabled] = useState(true)
    const [orderNumber, setOrder] = useState(1)
    const [exerciseName,setExerciseName]=useState('PUSH UP')

    const [setNumber,setSetNumber]=useState(3)
    const [repNumber,setRepNumber]=useState(8)
    
      const onChangeOrder = (e) => {
        const orderNumber = e.target.value;
        setOrder(orderNumber);
      };

      const onChangeExercise=(e)=>{
        const exerciseName = e.target.value;
        setExerciseName(exerciseName);
      }

      const onChangeSet=(e)=>{
        const setNumber = e.target.value;
        setSetNumber(setNumber);
      }

      const onChangeRep=(e)=>{
        const repNumber = e.target.value;
        setRepNumber(repNumber);
      }

      const handleSumbit = async e => {


      }


    return(
        <div className="clearfix">
        <div className="workoutheading clearfix">
        <p>ORDER</p> <p>EXERCISE</p> <p>SETS</p> <p>REPS</p>
       </div>
      
        <div className="detail">
        <form onSubmit={handleSumbit}>
        <input
          className='order'
          type='text'
          placeholder='0'
          onChange={onChangeOrder}
          value={orderNumber}
          disabled={inputDisabled}
          required
        />

        <input
          className='exercise'
          type='text'
          placeholder='0'
          onChange={onChangeExercise}
          value={exerciseName}
          disabled={inputDisabled}
          required
        />  

        <input
          className='set'
          type='text'
          placeholder='0'
          onChange={onChangeSet}
          value={setNumber}
          disabled={inputDisabled}
          required
        />  

        <input
          className='rep'
          type='text'
          placeholder='0'
          onChange={onChangeRep}
          value={repNumber}
          disabled={inputDisabled}
          required
        />  
        </form>
       </div>
       </div>

    )
}

export default Workoutdetail