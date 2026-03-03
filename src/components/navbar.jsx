import { NavLink } from "react-router-dom";

function Navbar() {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">HOME</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/description">+ Info</NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink className="nav-link" to="/new-session">ADD SESSION</NavLink>
                    </li> */}
                    {/* <li className="nav-item">
                        <NavLink className="nav-link" to="/login">INICIAR SESIÓN</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/suscription">SUSCRIBIRSE</NavLink>
                    </li> */}
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;