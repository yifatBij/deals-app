import {NavLink} from 'react-router-dom';
const Navbar = () => {
    return(
        <nav className="navBar">
            <ul>
                <li><NavLink exact to="/">All Deals</NavLink></li>
                <li><NavLink to="/newDeal">Add Deal</NavLink></li>
            </ul>
        </nav>
    );
}
export default Navbar;