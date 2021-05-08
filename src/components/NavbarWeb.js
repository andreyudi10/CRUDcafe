import React,{ useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink as NavLinkBootstrap,
    NavItem,    
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
import {NavLink} from 'react-router-dom'

import styles from './NavbarWeb.module.css'         

const NavbarWeb = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const bodyNavbar = (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
                reactstrap
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink to="/component">
                                {/* <NavLinkBootstrap href="/component"> */}
                                <div className={styles.komponen}>
                                    Components
                                </div>
                                {/* </NavLinkBootstrap> */}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLinkBootstrap to="https://github.com/reactstrap/reactstrap">
                                GitHub
                            </NavLinkBootstrap>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                Option 1
                                </DropdownItem>
                                <DropdownItem>
                                Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                <NavbarText>Simple Text</NavbarText>
                </Collapse>
        </Navbar>
    )

    return (
        <div className={styles.maincontainer}>                
            halo ini navbar
            {bodyNavbar}
        </div>
    )
}

export default NavbarWeb
