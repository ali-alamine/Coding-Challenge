import React from 'react';
import { BrowserRouter as Router, Route, Switch ,Link} from "react-router-dom";
import Home from '../Home/Home';
import './Header_menu.css'
import Navbar  from 'react-bootstrap/Navbar'
import Nav  from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function Header_menu(){
    return (

        <div className='container'>
            <Container>
                <div className='header-menu'>
                    <Router>
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                            {/* <Navbar.Brand href="#home">Coding Challenge</Navbar.Brand> */}
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    <Link className='nav-link' to="/Home">Home</Link>
                                    <Link className='nav-link' to="/page2">Page 2</Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <Switch>
                            <Route path="/Home">
                                <Home />
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </Container>
        </div>
    )
}

export default Header_menu;