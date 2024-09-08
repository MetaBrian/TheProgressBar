function HomePage (){

    const userName = 'MetaBrian';
    //have the userName reflect LogIn username

    return (
        <div className='homePage'>
            <h2>Welcome {userName ? userName: ''}!</h2>
        </div>
    )
}

export default HomePage;