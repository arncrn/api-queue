import React, { Component } from "react";
import Past from "./Past";
import Future from "./Future";
import { Nav } from "react-bootstrap";
// import testData from "../../../test-data.js"

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 'past',
      formUrl: '/makerequest',
    }
  }

  shouldComponentUpdate(prevProps, prevState) {
    let changedTab = prevState.currentTab !== this.state.currentTab;
    return changedTab;
  }

  getPastRequests = () => {
    let pastRequests = this.props.appData.filter(request => {
      return request.response.status;
    });
    return pastRequests;
  }

  getFutureRequests = () => {
    return this.props.appData.filter(request => {
      return !request.response.status;
    })
  }

  changeTab = (event) => {
    this.props.refreshPage();

    let target = event.target;
    let value = target.textContent.toLowerCase();
    let formUrl;
    if (value === 'past') {
      formUrl = '/makerequest';
    } else {
      formUrl = '/updaterequest';
    }

    this.setState({
      currentTab: value,
      formUrl: formUrl,
    })
  }

  render() {
    let currentTab = this.state.currentTab === 'past' ?
     <Past 
      updateData={this.props.updateData}
      appData={this.getPastRequests()} 
      formUrl={this.state.formUrl}
      showAlert={this.props.showAlert}
    /> : 
     <Future 
      updateData={this.props.updateData}
      appData={this.getFutureRequests()} 
      formUrl={this.state.formUrl}
      showAlert={this.props.showAlert}
    />

    return (
      <>
        <Nav variant="tabs" defaultActiveKey="link-1" className="mt-3 mobile-sidebar-style">
          <Nav.Item>
            <Nav.Link onClick={this.changeTab} eventKey="link-1">Past</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={this.changeTab} eventKey="link-2">Future</Nav.Link>
          </Nav.Item>
        </Nav>

        { currentTab }
      </>
    );
  }
}

export default Sidebar;
