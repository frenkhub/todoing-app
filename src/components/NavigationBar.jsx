import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">todoing app</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
            <NavItem>
                    <Link to="/sessions">sessions</Link>
                </NavItem>
                {/* <NavItem>
                    <Link to="/tasks">tasks</Link>
                </NavItem> */}
            </Nav>
        </Navbar>
    )
}

export default NavigationBar