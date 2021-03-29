import '../../CSS/ProgramComponent.css'
import Progress from '../Progress'

const ProgramComponent =()=>{




return (

<div className="program">
<div className="completeicon">&#x2713;</div>
<div className="failicon">&#8722;</div>

    <div className="programhead">
        <h5>workout Program A</h5> 
        <Progress/>
    </div>
    <div className="Divider">
        <span className="tri">▲</span>
        </div>
</div>


)
}

export default ProgramComponent