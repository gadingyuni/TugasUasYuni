import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
const NavigationBar = (props) => {
  return (
    <Navbar>
      {/* <h1>Navigasi Testing</h1> */}
      <Navbar.Brand>Bioskop Kampus</Navbar.Brand>
      <Nav>
        <Nav.Link>Trending</Nav.Link>
        <Nav.Link>Superhero</Nav.Link>
        {/* <Dropdown>
          <Dropdown.Toggle variant="Success" id="dropdown-basic">
            Genre
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Romantic</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Draktor</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Pop & Punk</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Horor</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
      </Nav>
    </Navbar>
  );
};
export default NavigationBar;
