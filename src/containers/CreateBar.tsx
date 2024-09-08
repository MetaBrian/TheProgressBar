import submitBar from "../helperFunctions/submitBar";
import { useState } from "react";


//have failure to submit a bar reflect in the UI


function CreateBar () {

    const [checker, setChecker] = useState(false);

    return (
        <div className='createBars'>
            <div>
                {(checker) ? 'Successfully created a Bar': ""}
            
                {/* {(!checker) ? 'Failed to create Bar': ""} */}
            </div>

           <form id='barForm'>
                <input id='barTitle' type="text" placeholder='Title' className="createInputs"/>
                <input id='barMinimum' type='text' placeholder='Start' className="createInputs"/>
                <input id='barMaximum' type='text' placeholder='End' className="createInputs"/>
                <input id='barCategory' type='text' placeholder='Category' className="createInputs"/>
                
                <button id='submitBar' type='button' onClick={()=>{
                    if (document.getElementById('barTitle').value && parseInt(document.getElementById('barMinimum').value && parseInt(document.getElementById('barMaximum').value))){
                    submitBar(document.getElementById('barTitle').value, parseInt(document.getElementById('barMinimum').value), parseInt(document.getElementById('barMaximum').value), document.getElementById('barCategory').value);
                    setChecker(true); 
                    }
                    else {setChecker(false)}
                }}><h1>Submit!</h1></button>
           </form> 

        </div>
    )
}

export default CreateBar;