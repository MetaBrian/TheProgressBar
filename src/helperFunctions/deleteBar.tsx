function deleteBar(_id:string) {

    console.log(_id, 'this is fetch id')
    fetch ('http://localhost:8080/deleteBar', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            _id:_id
        })
    })
    .catch(error => console.log(error))
}

export default deleteBar;