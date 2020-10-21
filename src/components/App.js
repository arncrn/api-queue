import React, { Component } from 'react';
import Sidebar from './dashboard/sidebar/Sidebar';
import Parameters from './dashboard/form-top/Parameters.js';
import Url from './dashboard/form-top/Url.js';
import Headers from './dashboard/Headers.js';
import Scheduler from './dashboard/Scheduler.js';
import Post from './dashboard/Post.js';
import Body from './dashboard/Body.js';
import RequestResponse from './dashboard/RequestResponse.js';
import PopUp from './dashboard/PopUp.js';

// Bootstrap Components 
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   verb: "get"
    // };
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={3} as={"main"} className="border"><Sidebar/></Col>
          <Col xs={9} as={"main"} className="border">
            <Form>
              <Url/>
                {/* {this.state.verb !== 'post' && <Parameters/>} */}
                <Parameters/>
              <hr/>
              <Headers/>
              <Body />
              <Scheduler/>
              <Post />
              <PopUp />
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;