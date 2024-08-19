import submitBar from "../helperFunctions/submitBar";
import { useState } from "react";


//make the submit button a link to display all with the new bar displaying as well



function CreateBar () {

    return (
        <div className='createBars'>
           <form>
                <input id='barTitle' type="text" placeholder="Title"/>
                <input id='barMinimum' type='text' placeholder='Minimum Value'/>
                <input id='barMaximum' type='text' placeholder='Maximum Value'/>
           </form> 
           <button id='submitBar' onClick={()=>{
                    submitBar(document.getElementById('barTitle').value, parseInt(document.getElementById('barMinimum').value), parseInt(document.getElementById('barMaximum').value)) 
                }}></button>
        </div>
    )
}

export default CreateBar;