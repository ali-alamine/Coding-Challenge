import React from 'react';
import { BrowserRouter as Router, Route, Switch ,Link,Redirect} from "react-router-dom";
import Home from '../Home/Home';
import Page_2 from '../Page_2/Page_2';
import './Header_menu.css'
import Navbar  from 'react-bootstrap/Navbar'
import Nav  from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function Header_menu(){
    return (

        <div className='header-menu'>
            <Container>
                <div className='header-menu'>
                    <Router>
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                            <Navbar.Brand>Covid-19 Tracker</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                    <Link className='nav-link' to="/Home">Home</Link>
                                    <Link className='nav-link' to="/Page2">Page 2</Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>

                        <Route path='/'>
                            <Redirect to="/Page2" />
                        </Route>
                        <Switch>
                            <Route path="/Home">
                                <Home />
                            </Route>
                            <Route path="/Page2">
                                <Page_2 />
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </Container>
        </div>
    )
}

export default Header_menu;