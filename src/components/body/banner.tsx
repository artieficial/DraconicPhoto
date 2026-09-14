import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image';

const Banner = () => {
    return (
        <div className="vh-100 vw-100 overflow-hidden z-0">
            <Image className="banner" src="assets/images/banner.jpg" alt="Banner" fluid/>
        </div>
    );
}

export default Banner;