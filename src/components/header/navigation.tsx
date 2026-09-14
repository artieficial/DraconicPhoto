import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
    return <Navbar variant="dark" fixed="top" className="w-100 z-1 bg-navbar">
        <Container>
            <Navbar.Brand href="#home">
                <Image
                    alt=""
                    src="assets/images/logo.png"
                    width="200"
                    height="80"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
        </Container>
    </Navbar>;
}

export default Navigation;