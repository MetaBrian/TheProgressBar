import submitBar from "../helperFunctions/submitBar";
import { useState } from "react";


//make the submit button a link to display all with the new bar displaying as well



function CreateBar () {

    return (
        <div className='createBars'>
           <form id='barForm'>
                <input id='barTitle' type="text" placeholder='Title' className="createInputs"/>
                <input id='barMinimum' type='text' placeholder='Start' className="createInputs"/>
                <input id='barMaximum' type='text' placeholder='End' className="createInputs"/>
                <input id='barCategory' type='text' placeholder='Category' className="createInputs"/>
                
                <button id='submitBar' onClick={()=>{
                    if (document.getElementById('barTitle').value && parseInt(document.getElementById('barMinimum').value && parseInt(document.getElementById('barMaximum').value))){
                    submitBar(document.getElementById('barTitle').value, parseInt(document.getElementById('barMinimum').value), parseInt(document.getElementById('barMaximum').value), document.getElementById('barCategory').value) 
                    }
                }}><h1>Submit!</h1></button>
           </form> 

        </div>
    )
}

export default CreateBar;