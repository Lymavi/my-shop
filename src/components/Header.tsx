import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return(
    <Navbar expand="lg" className="py-0 w-100 fixed-top my-custom-header">
      <div className="w-100 d-flex align-items-center px-3">
        <Navbar.Brand as={NavLink} to="/">Букетик</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" className="my-auto ms-auto"/>
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-3 me-auto">
            <Nav.Link as={NavLink} to="/product">Услуги</Nav.Link>
            <Nav.Link as={NavLink} to="/about">О нас</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Контакты</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}