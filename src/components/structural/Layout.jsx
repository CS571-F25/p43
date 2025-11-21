import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router";

export default function Layout(props) {
    return <div>
        <Navbar>
            <Container>
                {/* <Navbar.Brand as={Link} to="/">
                    Home
                </Navbar.Brand> */}
                <Nav>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/nutrition">Nutrition</Nav.Link>
                    <Nav.Link as={Link} to="/exercise">Exercise</Nav.Link>
                    <Nav.Link as={Link} to="/sleep">Sleep</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <div style={{margin: "1rem"}}>
            <Outlet />
        </div>
    </div>
}