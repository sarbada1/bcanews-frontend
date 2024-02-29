import "bootstrap/dist/css/bootstrap.min.css";


import Col from 'react-bootstrap/Col';

function FooterComponent() {

    const bannerStyle = {
        border: '5px solid black',
        height:'100px',
        marginTop:'40px'
      };
  return (
    <>
           <Col  style={bannerStyle}   />

     
    </>
  );
}

export default FooterComponent;