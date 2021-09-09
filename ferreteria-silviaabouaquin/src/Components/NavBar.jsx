//import { Button} from "./Button";
import { Link } from "react-router-dom";
const NavBar = () => {
    return(
        <div className='app-navbar'>
            <div className='navbar-img'>
                <p>LOPEZ MAYORISTA FERRETERO</p>
            </div>
            <div className='navbar-menu'>
                <Link to="/"><p>Home</p></Link>
                <Link to="/Construccion"><p>Construccion</p></Link>
                <Link to="/Electricidad"><p>Electricidad</p></Link>
                <Link to="/cart"><p>Carrito</p></Link>
            </div>
        </div>    
    )
}
export default NavBar