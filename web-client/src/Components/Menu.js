import {NavLink} from 'react-router-dom';

function Menu() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <NavLink exact active className="navbar-brand" to="/">Navbar</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink exact active className="active nav-link" to="/">Welcome</NavLink>
                    </li>
                </ul>
                <form className="d-flex">
                        <NavLink active className="btn btn-success" to="/login">Login</NavLink>
                </form>
            </div>
        </div>
    </nav>
    )
}

export default Menu;