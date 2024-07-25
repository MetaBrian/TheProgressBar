import { useState, useEffect } from "react";


function ProgressBar(){

    const backgroundColors =['red','yellow','green'];

    const [value, setValue] = useState(0);
    const [background, setBackground] = useState(0);

    
    return (
       <div className='barBlock'>

        <button className='barButtons' onClick={()=>{
            if (value > 0){setValue(val=>val-1)}
            }}>-</button>


        <div className="progressBar" style={{backgroundColor:`${backgroundColors[background]}`}}>
            {value}%
        </div>

        <button className='barButtons'onClick={()=>{setValue(val=>val+1)
              if (value=== 0 || value === 1){setBackground(bg=>bg+1,
              )
              
            }
            }
        }>+</button>
        </div> 
    )
}

export default ProgressBar;