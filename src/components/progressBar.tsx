import { useState } from "react";
import adjuster from "../helperFunctions/incrementValue";
import deleteBar from "../helperFunctions/deleteBar";

function ProgressBar(props){
    const [value, setValue] = useState(props.startValue)
    const [backG, setBackG] = useState('progressBar')

    
    
    return (
       <div className='barBlock'>
        
        <div className='buttonBlock'>
            <button className='decrementButtons' onClick={()=>{


                if (value > 0){
                setValue(val=>val-1);
                adjuster(props.id, value-1);
                }

                if ((100*value/props.endValue) >= 0 && (100*value/props.endValue) < 33 ){
                    setBackG('redBar')
                }
                else if ((100*value/props.endValue) >= 33 && (100*value/props.endValue) < 66){
                    setBackG('yellowBar')
                }
                else if((100*value/props.endValue) >= 66){
                    setBackG('greenBar')
                }
            }}>-1</button>

             <button className='decrementButtons'  onClick={()=>{


                if (value >= 10){
                setValue(val=>val-10);
                adjuster(props.id, value-10);
                }

                if ((100*value/props.endValue) >= 0 && (100*value/props.endValue) < 33 ){
                    setBackG('redBar')
                }
                else if ((100*value/props.endValue) >= 33 && (100*value/props.endValue) < 66){
                    setBackG('yellowBar')
                }
                else if((100*value/props.endValue) >= 66){
                    setBackG('greenBar')
                }
            }}>
                
            -10</button>

            <button className='decrementButtons'  onClick={()=>{


if (value >= 20){
setValue(val=>val-20);
adjuster(props.id, value-20);
}

if ((100*value/props.endValue) >= 0 && (100*value/props.endValue) < 33 ){
    setBackG('redBar')
}
else if ((100*value/props.endValue) >= 33 && (100*value/props.endValue) < 66){
    setBackG('yellowBar')
}
else if((100*value/props.endValue) >= 66){
    setBackG('greenBar')
}
}}>-20</button>
        </div>
        


        <div className='entireBar'>
            <div className="barContent">
            <h3>{props.title}</h3>
            <h3>{props.category}</h3>
            </div>
        
            <div className={backG}>
            <h3>{100*value/props.endValue}%</h3>
            <h3>{value}/{props.endValue}</h3>
            </div>
            

        </div>

<div className='buttonBlock'>
        <button className='incrementButtons' onClick={()=>{
    if (value < props.endValue){
        adjuster(props.id, value+1)
        setValue(value+1);
        }
            if ((100*value/props.endValue) >= 0 && (100*value/props.endValue) < 33 ){
                setBackG('redBar')
            }
            else if ((100*value/props.endValue) >= 33 && (100*value/props.endValue) < 66){
                setBackG('yellowBar')
            }
            else if((100*value/props.endValue) >= 66){
                setBackG('greenBar')
            }

        }}>+1</button>
        
        <button className='incrementButtons' onClick={()=>{

if (value <= (props.endValue-10)){
    adjuster(props.id, value+10)
    setValue(value+10);
    }

if ((100*value/props.endValue) > 0){
    setBackG('redBar')
}
if ((100*value/props.endValue) > 33){
    setBackG('yellowBar')
}
if ((100*value/props.endValue) > 66){
    setBackG('greenBar')
}

}}>+10</button>



<button className='incrementButtons' onClick={()=>{
  //fastest increment  
    if (value <= (props.endValue-20)){
    adjuster(props.id, value+20)
    setValue(value+20);
    }
    if ((100*value/props.endValue) > 0){
        setBackG('redBar')
    }
    if ((100*value/props.endValue) > 33){
        setBackG('yellowBar')
    }
    if ((100*value/props.endValue) > 66){
        setBackG('greenBar')
    }

}}>+20</button>
 <button className='decrementButtons'onClick={()=>{adjuster(props.id, 0); setValue(0); setBackG('progressBar')}}>RESET</button>
 <button className="decrementButtons" onClick={()=>{deleteBar(props.id)}}>DELETE</button>
</div>
        </div> 
    )
}

export default ProgressBar;