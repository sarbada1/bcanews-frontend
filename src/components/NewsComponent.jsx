
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function NewsComponent() {


  const bannerStyle = {
    height:'400px',
    border : '5px solid black',
    
    width:'300px',
    margin:'20px 10px'
  };

  return (
    <>
<Row>

      <Col  style={bannerStyle}   />
      <Col  style={bannerStyle}   />
      <Col  style={bannerStyle}   />
</Row>
<Row>

      <Col  style={bannerStyle}   />
      <Col  style={bannerStyle}   />
      <Col  style={bannerStyle}   />
</Row>
    </>
  );
}

export default NewsComponent;
