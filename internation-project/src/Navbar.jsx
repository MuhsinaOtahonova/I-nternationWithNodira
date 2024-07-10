import 'bootstrap/dist/css/bootstrap.min.css';
import { CiUser } from "react-icons/ci";
import { GiRotaryPhone } from "react-icons/gi";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from './Login.jsx';
function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar-content fixed-top">
            <Container className='p-0 p-md-2'>
                <a href="#"><img src="src/assets/image-removebg-preview.png" alt="logo" width={190} className='logo' /></a>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='navbar-button' />
                <Navbar.Collapse className='navbar-collapse' id="responsive-navbar-nav">
                    <Nav className="mx-5 d-flex justify-content-around w-100 px-5 nav-links">
                        <Nav.Link className='mt-5 mt-md-0' href="#">About Us</Nav.Link>
                        <Nav.Link href="#">Team</Nav.Link>
                        <Nav.Link href="#">Prices</Nav.Link>
                        <Nav.Link href="#">Gallery</Nav.Link>
                        <Nav.Link href="#">Public offer</Nav.Link>
                        <Nav.Link href="#">Careers</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    <div className="d-column">
                        <div className="d-flex navbar-icon-boxes">
                            <a href="#">
                                <div className="navbar-icon-box">
                                    <CiUser className='navbar-icon' size={17} />
                                </div>
                            </a>
                            <Link to="/login">
                                <div className="navbar-icon-box">
                                    <CiUser className='navbar-icon' size={17} />
                                </div>
                            </Link>
                            <a href="#">
                                <div className="navbar-icon-box">
                                    <GiRotaryPhone className='navbar-icon' size={20} />
                                </div>
                            </a>
                        </div>
                        <div className="navbar-tel mt-2 text-center">
                            <a href="#">78 <b>777 77 07</b></a>
                            <hr className='line mt-0 mb-0' />
                        </div>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    );

}
export default CollapsibleExample


