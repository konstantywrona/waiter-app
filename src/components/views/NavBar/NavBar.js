import { Navbar, NavbarBrand, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      className="mt-4 mb-4 rounded d-flex justify-content-between"
    >
      <NavbarBrand className="justify-content-start px-3" href="/">
        Waiter.app
      </NavbarBrand>
      <Nav className="flex-sm-column flex-md-row px-3">
        <Nav.Link as={NavLink} to="/">
          Home
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
