import { useState } from "react";
import incrementor from "../helperFunctions/incrementValue";

function ProgressBar(props){
    const [value, setValue] = useState(props.startValue)
    const [counter, setCounter] = useState(0)
    const [backG, setBackG] = useState('progressBar')



    return (
       <div className='barBlock'>

        <button className='barButtons' id = 'decrementButton'onClick={()=>{
            if (value === 1){
                document.getElementById('decrementButton').disabled=true
                }

            setValue(val=>val-1);


            }}>-</button>


        <div className={backG}>
            <h3>{props.title}</h3>
            <br/>
            <h3>{value}%</h3>
        </div>

        <button className='barButtons' onClick={()=>{

            incrementor(props.id, value+1)
            setValue(value+1);

            if (value > 0 ){
                setBackG('redBar')
            }
            if (value > 33){
                setBackG('yellowBar')
            }
            if (value > 67){
                setBackG('greenBar')
            }

        }}>+</button>
        
        <button className='barButtons' onClick={()=>{

    incrementor(props.id, value+10)
        setValue(value+10);

if (value > 0){
    setBackG('redBar')
}
if (value > 33){
    setBackG('yellowBar')
}
if (value > 67){
    setBackG('greenBar')
}

}}>+10</button>

<button className='barButtons' onClick={()=>{

incrementor(props.id, value+20)
    setValue(value+20);

if (value > 0){
setBackG('redBar')
}
if (value > 33){
setBackG('yellowBar')
}
if (value > 67){
setBackG('greenBar')
}

}}>+20</button>


        <button onClick={()=>{incrementor(props.id, 0); setValue(0); setBackG('progressBar')}}>RESET</button>
        </div> 
    )
}

export default ProgressBar;