import React from "react";
import App from "./App.js";
import HOC from "./HOC.js";
import completeData from "../test-data-2.js";
// import testData from "../test-data.js";

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      appData: [],
    };
  }

  shouldComponentUpdate(prevProps, prevState) {
    let updatedData = prevState.appData.length !== this.state.appData.length;
    return updatedData;
  }
// https://www.example.com
// Example now (10)
  // componentDidMount() {
  //   fetch("http://localhost:3001/allrequests")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((response) => {
  //       this.setState({ appData: response });
  //     });
  // }

  componentDidMount() {
    this.setState({ appData: [completeData] });
  }

  updateData = (newData) => {
    console.log("9. Frontend makes GET request to server", Date.now());
    fetch("http://localhost:3001/allrequests")
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

  render() {
    let AppForm = HOC(App);

    return (
      <AppForm appData={this.state.appData} updateData={this.updateData} />
    );
  }
}

export default AppWrapper;
