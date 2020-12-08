import React from "react";
import App from "./App.js";
import HOC from "./HOC.js";
import { Redirect } from "react-router-dom";
// import completeData from "../test-data-2.js";
// import testData from "../test-data.js";

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      appData: [],
      isMounted: false,
      alertMessage: ''
    };
  }

  showAlert = (message) => {
    this.setState({
      alertMessage: `${message}`
    })

    setTimeout(() => {
      this.setState({
        alertMessage: ''
      })
    }, 3000);
  }

  refreshPage = () => {
    fetch("http://localhost:3001/allrequests", {credentials: 'include',})
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.setState({ appData: response });
      });
  }

  shouldComponentUpdate(prevProps, prevState) {
    let updatedData = prevState.appData.length !== this.state.appData.length;
    let changedAlertMessage = prevState.alertMessage !== this.state.alertMessage;
    return updatedData || changedAlertMessage;
  }

  componentDidMount() {
    this.setState({isMounted: true}, () => {
      if (this.state.isMounted) 
        fetch("http://localhost:3001/allrequests", {credentials: 'include',})
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          this.setState({ appData: response });
        });
    });
  }

  componentWillUnmount() {
    this.setState({isMounted: false});
  }

  updateData = () => {
    fetch("http://localhost:3001/allrequests", {credentials: 'include',})
    .then((response) => {
      return response.json();
    })
    .then((response) => {
        this.setState({ appData: response }, ()=> {this.forceUpdate()});
      }).catch((error) => {
        console.log(error);
      });
  };

  renderPage() {
    let AppForm = HOC(App)
    if (this.props.loggedIn === 'true') {
      return (
        <AppForm 
        appData={this.state.appData} 
        updateData={this.updateData}
        refreshPage={this.refreshPage}
        showAlert={this.showAlert}
        alertMessage={this.state.alertMessage}
        />
      );
    } else {
      return <Redirect to="/signup" />
    }
  }

  render() {
    return this.renderPage();
  }
}

export default AppWrapper;
