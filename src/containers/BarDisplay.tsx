import ProgressBar from "../components/ProgressBar";

//dynamically render all database stored progressbars instead of static sample

function BarDisplay(){
return (
    <div className="barDisplay">
        <ProgressBar></ProgressBar>
  </div>
)
}

export default BarDisplay;