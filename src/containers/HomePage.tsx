function HomePage (){

    const userName = 'MetaBrian';
    //use terniary once userName can be collected at app startup

    return (
        <div className='homePage'>
            <h2>Welcome {userName}!</h2>
        </div>
    )
}

export default HomePage;