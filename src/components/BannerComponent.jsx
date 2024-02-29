import React from 'react';
import Col from 'react-bootstrap/Col';


function BannerComponent() {
  const bannerStyle = {
    height:'500px',
    border : '5px solid black',
    marginTop:'40px',
  };

  return (
    <>
      <Col  style={bannerStyle}   />
    </>
  );
}

export default BannerComponent;
