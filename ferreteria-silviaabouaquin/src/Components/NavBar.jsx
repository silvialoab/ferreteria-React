//import { Button} from "./Button";
import { Link } from "react-router-dom";
const NavBar = () => {
    return(
        <div className='app-navbar'>
            <div className='navbar-img'>
                <p>LOGO</p>
            </div>
            <div className='navbar-menu'>
                <Link to="/"><p>Home</p></Link>
                <Link to="/Productos"><p>Productos</p></Link>
                <Link to="/Ofertas"><p>Ofertas</p></Link>
                <Link to="/"><p>Contacto</p></Link>
            </div>
        </div>    
    )
}
export default NavBar