import React from 'react';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
const Header = () => {
  return (
    <div className='container mt-5'>
      <Row>
        <h1>Note Haven</h1>
        <Nav className="my-5  justify-content-evenly" variant='pills' defaultActiveKey='/home'>
          <Nav.Item>
            <Nav.Link href='/home'> Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link> Decks</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link> Create</Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>
    </div>
  );
};

export default Header;
