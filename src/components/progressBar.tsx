import { useState } from "react";

function ProgressBar(props){


    const currentValue = (props.startValue/props.endValue)*100;
    console.log(currentValue, 'this is division props')
    const [value, setValue] = useState(currentValue);
    
    return (
       <div className='barBlock'>

        <button className='barButtons' id = 'decrementButton'onClick={()=>{
            if (value === 1){
                document.getElementById('decrementButton').disabled=true
                }
                console.log(value,'this is before the hook')
            setValue(val=>val-1);
            console.log(value,'this is after the Hook')

            }}>-</button>


        <div className="progressBar">
            <h3>{props.title}</h3>
            <br/>
            <h3>{value}%</h3>
        </div>

        <button className='barButtons'onClick={()=>{setValue(val=>val+1)}
        }>+</button>
        </div> 
    )
}

export default ProgressBar;