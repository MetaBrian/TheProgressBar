import submitBar from "../helperFunctions/submitBar";
import { useState } from "react";


//make the submit button a link to display all with the new bar displaying as well



function CreateBar () {

    return (
        <div className='createBars'>
           <form id='barForm'>
                <input id='barTitle' type="text" placeholder='Title' className="createInputs"/>
                <input id='barMinimum' type='text' placeholder='Minimum Value' className="createInputs"/>
                <input id='barMaximum' type='text' placeholder='Maximum Value' className="createInputs"/>
                
                <button id='submitBar' onClick={()=>{
                    submitBar(document.getElementById('barTitle').value, parseInt(document.getElementById('barMinimum').value), parseInt(document.getElementById('barMaximum').value)) 
                }}><h1>Submit!</h1></button>
           </form> 

        </div>
    )
}

export default CreateBar;