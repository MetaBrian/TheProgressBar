function editBar(_id:string, title:string, minVal:number, maxVal: number, category?:string){
    fetch('http://localhost:8080/editBar', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({
            _id: _id,
            title: title,
            startValue: minVal,
            endValue: maxVal,
            category: category      
    })
})
.catch(error => console.log(error, 'check helper function'))}

export default editBar;