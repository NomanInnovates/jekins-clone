import {Navbar,Nav,NavDropdown,Form,Button,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
function Header(){
  return (
    <div>
   <Navbar bg="dark navbar-dark" expand="lg">
  <Navbar.Brand href="#">Jenkins</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#">Blog</Nav.Link>
      <Nav.Link href="#">Documentation</Nav.Link>
      <Nav.Link href="#">Plugins</Nav.Link>
      <Nav.Link href="#">Community</Nav.Link>
      <Nav.Link href="#">Subprojects</Nav.Link>
      <Nav.Link href="#">About</Nav.Link>
      
      <NavDropdown title="English" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">
中文 Chinese</NavDropdown.Item>
     
      </NavDropdown>
      <Nav.Link href="#"><Button variant="outline-secondary">Download</Button></Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      
    </Form>
  </Navbar.Collapse>
</Navbar>

    </div>

  )
}
export default Header