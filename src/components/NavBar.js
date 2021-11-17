import logo from '../images/logo.png';
import '../styles/main.css';


function NavBar(){

    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid navbarDisplay">
                <div className="logoDisplay">
                    <img src={logo} width="300px" height="50px" alt="logo" />
                </div>
                <div>
                    <ul className="navbar-nav menuDisplay">
                        <li className="nav-button">
                            <a href="#" className="nav-a fontReg">
                                Inicio
                            </a>
                        </li>
                        <li className="nav-button">
                            <a href="#" className="nav-a fontReg">
                                Tienda
                            </a>
                        </li>
                        <li className="nav-button">
                            <a href="#" className="nav-a fontReg">
                                Carrito
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    
    </>
}

export default NavBar;