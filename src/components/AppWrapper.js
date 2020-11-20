import React from "react";
import App from "./App.js";
import HOC from "./HOC.js";
import testData from "../test-data.js";

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      appData: [],
    };
  }

  shouldComponentUpdate(prevProps, prevState) {
    let updatedData = prevState.appData.length !== this.state.appData.length;
    // console.log(`shouldComponentUpdate: ${updatedData}`);
    return updatedData;
  }

  // componentDidMount() {
  //     this.setState({
  //         appData: testData,
  //     })
  // }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.appData.length !== this.state.appData.length) {
//       console.log("didupdate");
//       fetch("http://localhost:3001/allrequests")
//         .then((response) => {
//           return response.json();
//         })
//         .then((response) => {
//           console.log(response.length);
//           this.setState({ appData: response });
//         });
//     }
//   }

  componentDidMount() {
    // console.log("didmount");
    fetch("http://localhost:3001/allrequests")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.setState({ appData: response }, () => {
        //   console.log(this.state.appData.length);
        });
      });
  }

  updateData = (newData) => {
    fetch("http://localhost:3001/allrequests")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response.length);
        this.setState({ appData: response }, ()=> {this.forceUpdate()});
      });
      
    // console.log(this.state.appData.length);
    // this.setState(
    //   {
    //     appData: [...this.state.appData, newData],
    //   },
    //   () => {
    //     console.log(this.state.appData.length);
    //   }
    // );
  };

  render() {
    // console.log("updating");
    let AppForm = HOC(App);

    return (
      <AppForm appData={this.state.appData} updateData={this.updateData} />
    );
  }
}

export default AppWrapper;
