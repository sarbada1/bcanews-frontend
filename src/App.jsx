import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import BannerComponent from "./components/BannerComponent";
import NewsComponent from "./components/NewsComponent";


export default function App(){
    return (
        <Container>
          <Row>
            <Col>
            <HeaderComponent/>

            <BannerComponent/>
            <NewsComponent/>
            <FooterComponent/>
            </Col>
          </Row>
        </Container>
      );
}