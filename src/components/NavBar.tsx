import { Link } from "react-router-dom";

//use the logo as the home page link

function NavBar() {

    return (
    
        <div className='navBar'>
            <Link to='/' className='navLinks'>
                <h1>TheProgressBar</h1>
            </Link>
            <Link to='/createBars' className='navLinks'>
                <h2>Create Bars</h2>
            </Link>
            <Link to='/displayBars' className='navLinks'>
                <h2>My Bars</h2>
            </Link>
        </div>
    )
}

export default NavBar;