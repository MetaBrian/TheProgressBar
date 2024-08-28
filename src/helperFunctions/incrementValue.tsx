function incrementor(_id: string, value: number) {
    fetch('http://localhost:8080/incrementBar', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            _id: _id ,
            incrementedValue:value
        })
    }).catch(error => console.log(error))

}

export default incrementor;