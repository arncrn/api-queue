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
      let alertContainer = document.querySelector('.flash-message-container');
      alertContainer.style.display = 'none';
    }, 3000);
  }

  refreshPage = () => {
    fetch("/allrequests")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.setState({ appData: response });
      });
  }

  shouldComponentUpdate(prevProps, prevState) {
    let updatedData = prevState.appData.length !== this.state.appData.length;
    return updatedData;
  }

  componentDidMount() {
    this.setState({isMounted: true}, () => {
      if (this.state.isMounted) 
        fetch("/allrequests")
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
    fetch("/allrequests")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
        this.setState({ appData: response }, ()=> {
          this.forceUpdate()
          setTimeout(() => {
            let newRequest = document.querySelector('.glowing');
            if (newRequest) newRequest.classList.remove('glowing');
          }, 5000);
        });
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
