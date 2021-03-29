import '../CSS/Progress.css'

const Progress=()=>{

return(
    <div className="progresswrap">
        
        <div className="progress_start_end clearfix">
            <div className="stardate">Mon Apr 01, 21<br/>|</div>
            <div className="enddate">Fri Apr 05, 21<br/>|</div>
        </div>

        <div className="progress ">
            <div className="progressbar"></div>
        </div>

    </div>
)
}
export default Progress