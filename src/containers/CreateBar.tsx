
//make the submit button a link to display all with the new bar displaying as well
//on submit, create a bar in the database with fields 
    //need to import functions for cleaner code
        //structure the input fields first
        //consider db maximum value of 1 million 

function CreateBar () {
    return (
        <div className='createBars'>
           <form>
                <input id='barTitle' type="text" placeholder="Title"/>
                <input id='barMinimum' type='text' placeholder='Minimum Value'/>
                <input id='barMaximum' type='text' placeholder='Maximum Value'/>
                <input id='submitBar' type='submit'/>
           </form> 
        </div>
    )
}

export default CreateBar;