import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BiLogIn } from 'react-icons/bi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftNav from '../LeftNav/LeftNav';

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <Navbar collapseOnSelect expand="lg" className='mb-4' bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link className='text-decoration-none' to='/'><span className='bg-primary p-2 rounded-start text-light fw-bold'>Dragon</span>-<span className='bg-primary p-2 rounded-end text-light fw-bold'>News</span></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='me-2' to="/">All News</Link>
                        <Link to="#footer">Pricing</Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        {
                            user?.uid ?
                                <>
                                    <Nav.Link>{user?.displayName}</Nav.Link>
                                    <Link to="/profile">
                                        {
                                            user?.uid ?
                                                <Image
                                                    roundedCircle
                                                    style={{ height: '35px', width: '35px' }}
                                                    src={user.photoURL}
                                                ></Image>
                                                : <FaUser></FaUser>
                                        }
                                    </Link>
                                </>
                                :
                                <>
                                    <Link to='/login' className='me-1'><Button className='mb-1' variant="primary">Login <BiLogIn></BiLogIn></Button></Link>
                                    <Link to='/register'><Button className='mb-1' variant="outline-info">Register <AiOutlineUserAdd></AiOutlineUserAdd></Button></Link>
                                </>
                        }

                    </Nav>
                    <div className='d-lg-none'>
                        <LeftNav></LeftNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;