import { Link, useLocation } from "react-router-dom";
import editBar from "../helperFunctions/editBar";

function EditBar (){

    const initialBar = useLocation().state;
    console.log(initialBar)

    return (
        <div>
            <form>
                <input id='editTitle' placeholder={initialBar.title}></input>
                <input id='editStart' placeholder={initialBar.startValue}></input>
                <input id='editEnd' placeholder={initialBar.endValue}></input>
                <input id='editCategory'placeholder={initialBar.category}></input>
                <button id='submitBar' type='button' onClick={()=>{
                    if (document.getElementById('editTitle').value && parseInt(document.getElementById('editStart').value && parseInt(document.getElementById('editEnd').value))){
                    editBar( initialBar._id, document.getElementById('editTitle').value, parseInt(document.getElementById('editStart').value), parseInt(document.getElementById('editEnd').value), document.getElementById('editCategory').value) 
                    }
                }}><h1>Submit!</h1></button>
            </form>
        </div>
    )
}

export default EditBar;