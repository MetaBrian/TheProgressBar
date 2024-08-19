import { Link } from "react-router-dom";

//use the logo as the home page link

function NavBar() {

    return (
    
        <div className='navBar'>
            <Link to='/'>
                Home
            </Link>
            <Link to='/displayBars'>
                Progress Bars
            </Link>
        </div>
    )
}

export default NavBar;