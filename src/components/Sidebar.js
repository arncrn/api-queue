import React, { Component } from "react";

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

  render() {
    return (
      <aside className="sidebar">
        <div className="tabs">
          <button className="tablinks" onClick="">Past</button>
          <button className="tablinks" onClick="">Future</button>
        </div>

        <div class="tabcontent past">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </div>
        <div class="tabcontent future">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
