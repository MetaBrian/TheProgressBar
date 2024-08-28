import { useState } from "react";
import incrementor from "../helperFunctions/incrementValue";

function ProgressBar(props){

    let shadowValue = props.startValue
    const [value, setValue] = useState(shadowValue);

    
    return (
       <div className='barBlock'>

        <button className='barButtons' id = 'decrementButton'onClick={()=>{
            if (value === 1){
                document.getElementById('decrementButton').disabled=true
                }

            setValue(val=>val-1);


            }}>-</button>


        <div className="progressBar">
            <h3>{props.title}</h3>
            <br/>
            <h3>{value}%</h3>
        </div>

        <button className='barButtons' onClick={()=>{setValue(shadowValue=>shadowValue+=1);
        }}>+</button>
        </div> 
    )
}

export default ProgressBar;