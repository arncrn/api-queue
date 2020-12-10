import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

const Docs = () => {

  function handleClick(event) {
    document.querySelector('.list-group-item.active').classList.remove('active');
    event.target.classList.add('active');

    let name = event.target.dataset.name;
    console.log(name);
    let row = document.querySelector(`#${name}`);
    row.scrollIntoView();
  }


  return (
    <Container className="container-style">
    <Row className="pt-5">
      <Col md="4" >
        <Card style={{ width: '18rem' }}>
          <ListGroup variant="flush">
            <ListGroup.Item active data-name='howTo' onClick={handleClick}>How To</ListGroup.Item>
            <ListGroup.Item data-name='implementation' onClick={handleClick}>Implementation</ListGroup.Item>
            <ListGroup.Item data-name='futureFeatures' onClick={handleClick}>Future Features</ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
      <Col md="8">
        <Row id='howTo'>
          <h1>How To</h1>
          
          
        </Row>
        
        <Row id='implementation'>
          <h1>Implementation</h1>
        </Row>
       
        <Row id='futureFeatures'>
          <h1>Future Features</h1>
        </Row>
      </Col>
    </Row>

  </Container>
  );
};

export default Docs;
