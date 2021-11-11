import { Nav, NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

function Menu () {

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand"></a>
                <form className="d-flex">
                    <a href="" class="btn btn-success">Login</a>
                </form>
            </div>

        </nav>
    )
}

export default Menu;