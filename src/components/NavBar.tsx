import { Link } from "react-router-dom";

//use the logo as the home page link

function NavBar() {

    return (
    
        <div className='navBar'>
            <Link to='/' className='navLinks'>
                <h2>Home</h2>
            </Link>
            <Link to='/displayBars' className='navLinks'>
                <h2>Progress Bars</h2>
            </Link>
        </div>
    )
}

export default NavBar;