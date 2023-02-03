import {Navbar, Container, Nav, Image, InputGroup, Form, Dropdown} from 'react-bootstrap'
import magnify from '../images/icons/magnify.png'
import bell from '../images/icons/bell.png'
import netflixlogo from '../images/netflix_logo.png'
import avatar from '../images/avatar.png'
import dropdown from '../images/icons/dropdown.png'
import React, { Component} from 'react';

class MyNav extends Component{
    state={
        selected:false,
    }
    render(){
        return (
            <Navbar bg="light" expand="lg" className='navbar-style ml-auto'>
                <Container fluid>
                    <Navbar.Brand href="#home" className="navbar-brand"><Image src={netflixlogo} className="netflix-logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
                            <Nav.Link className="nav-link" href="#series">Series</Nav.Link>
                            <Nav.Link className="nav-link" href="#films">Films</Nav.Link>
                            <Nav.Link className="nav-link" href="#newandpopular">New & Popular</Nav.Link>
                            <Nav.Link className="nav-link" href="#mylist">My List</Nav.Link>
                            <Nav.Link className="nav-link" href="#browsebylanguages">Browse By Languages</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav className="ml-auto">
                            <>
                                {
                                    this.state.selected && 
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                        placeholder="Titles, people, genres"
                                        />
                                    </InputGroup>
                                }
                            </>
                            <Nav.Link href="#"><Image src={magnify} className="magnify icons" onClick={() => this.setState({ selected: !this.state.selected })}/></Nav.Link>
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
    
}

export default MyNav;