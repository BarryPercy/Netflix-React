import {Navbar, Container, Nav, Image, InputGroup, Form, Dropdown} from 'react-bootstrap'
import magnify from '../images/icons/magnify.png'
import bell from '../images/icons/bell.png'
import netflixlogo from '../images/netflix_logo.png'
import avatar from '../images/avatar.png'
import dropdown from '../images/icons/dropdown.png'
import { React, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'

const MyNav = (props) =>{
    const[selected,changeSelected] = useState(false)
    const location = useLocation()
    let placeholdertext ='';
    console.log('location object:', location)
    if(props.searchtext!==undefined){
        placeholdertext = props.searchtext
    }else{
        placeholdertext = "Titles, people, genres"
    }
    const navigate = useNavigate()
    return (
        <Navbar bg="light" expand="lg" className='navbar-style ml-auto'>
            <Container fluid>
                <Navbar.Brand href="#home" className="navbar-brand"><Link to="/"><Image src={netflixlogo} className="netflix-logo"/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/">
                            <div
                                className={
                                    location.pathname === ''
                                    ? 'nav-link active'
                                    : 'nav-link'
                                }
                                >
                                Home
                            </div>
                        </Link>
                        <Link to="/tv-shows">
                            <div
                                className={`nav-link${
                                    location.pathname === '/tv-shows' ? ' active' : ''
                                }`}
                                >
                                Tv Shows
                            </div>
                        </Link>
                        <Link className="nav-link" href="#films">Films</Link>
                        <Link className="nav-link" href="#newandpopular">New & Popular</Link>
                        <Link className="nav-link" href="#mylist">My List</Link>
                        <Link className="nav-link" href="#browsebylanguages">Browse By Languages</Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav className="ml-auto">
                        <>
                            {
                                selected && 
                                <InputGroup className="mb-3">
                                    <Form.Control
                                    placeholder={placeholdertext}
                                    />
                                </InputGroup>
                            }
                        </>
                        <Nav.Link href="#"><Image src={magnify} className="magnify icons" onClick={()=>changeSelected(!selected)}/></Nav.Link>
                        <Nav.Link href="#">Barry</Nav.Link>
                        <Nav.Link href="#"><Image src={bell} className="magnify icons"/></Nav.Link>
                        <Dropdown>
                            <Dropdown.Toggle className='nav-drop' style={{ backgroundColor: 'transparent', border: 'none' }}>
                                <Nav.Link href="#"><Image src={avatar} className="avatar"/></Nav.Link>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropdown-menu">
                                <Dropdown.Item>Manage Profiles</Dropdown.Item>
                                <Dropdown.Item>Transfer Profiles</Dropdown.Item>
                                <Dropdown.Item>Account</Dropdown.Item>
                                <Dropdown.Item>Help Centre</Dropdown.Item>
                                <Dropdown.Item>Log Out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
            </Container>
        </Navbar>
    );
    
}

export default MyNav;