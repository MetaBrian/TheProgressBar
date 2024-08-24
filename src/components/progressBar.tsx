import { useState } from "react";

function ProgressBar(props){
    const [value, setValue] = useState(0);
    
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
            <h3>{props.value}</h3>
        </div>

        <button className='barButtons'onClick={()=>{setValue(val=>val+1)}
        }>+</button>
        </div> 
    )
}

export default ProgressBar;