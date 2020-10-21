import React, { Component } from "react";
import Past from './Past';
import Future from './Future';


class Sidebar extends Component {

  // clickHandler = () => {
  //   alert('hello world');
  // }

  // componentDidMount = () => {
  //   let tabs = document.querySelectorAll('.tablinks');
  //   tabs[0].addEventListener('click', () => {
  //     alert('hello wolr');
  //   })
  // }

  constructor(props) {
    super(props);
    this.state = {
      page: "past"
    };
  }

  futureClick = () => {
    this.setState({
      page: "future"
    });
  }

  pastClick = () => {
    this.setState({
      page: "past"
    });
  }

  render() {
    let section;
    if (this.state.page === "past") {
      section = <Past/>;
    } else {
      section = <Future/>;
    } 

    return (
      <aside className="sidebar">
        <div className="tabs" style={{backgroundColor:`${this.state.color}`}}>
          <button className="tablinks" onClick={this.pastClick}>Past</button>
          <button className="tablinks" onClick={this.futureClick}>Future</button>
        </div>

        <div>
          {section}
        </div>
      </aside>
    );
  }
}

export default Sidebar;
