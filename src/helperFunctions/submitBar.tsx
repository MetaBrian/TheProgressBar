function submitBar(title:string, minVal:number, maxVal: number, category?:string){
    fetch('http://localhost:8080/newBar', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: title,
            startValue: minVal,
            endValue: maxVal,
            category: category      
    })
})
.catch(error => console.log(error, 'check helper function'))}

export default submitBar;