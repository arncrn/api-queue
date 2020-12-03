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
    };
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
    return updatedData;
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
    console.log("9. Frontend makes GET request to server", Date.now());
    fetch("http://localhost:3001/allrequests", {credentials: 'include',})
    .then((response) => {
      return response.json();
    })
    .then((response) => {
        console.log("10. Frontend updates local state with database data", Date.now());
        this.setState({ appData: response }, ()=> {this.forceUpdate()});
      }).catch((error) => {
        console.log(error);
      });
  };

  renderPage() {
    let AppForm = HOC(App)
    if (this.props.loggedIn) {
      return (
        <AppForm 
        appData={this.state.appData} 
        updateData={this.updateData}
        refreshPage={this.refreshPage}
        />
      );
    } else {
      return (
        <>
          <Redirect to="/signup" />
          <AppForm 
            appData={this.state.appData} 
            updateData={this.updateData}
            refreshPage={this.refreshPage}
          />
        </>
      )

    }
  }

  render() {
    console.log(this.props.loggedIn);
    return this.renderPage();
    // let AppForm = HOC(App);

    // return (

    //   <AppForm 
    //   appData={this.state.appData} 
    //   updateData={this.updateData}
    //   refreshPage={this.refreshPage}
    //   />
    // );
  }
}

export default AppWrapper;
