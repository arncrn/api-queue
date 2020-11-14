import React, { Component } from "react";

const FormStateAndMethods = (WrappedComponent, extraData = {}) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        httpVerb: extraData.method || "GET",
        hostpath: extraData.hostpath || "",
        time: extraData.time || this.calcTime(new Date()),
        timeZone: extraData.timeZone || "", // this will be set to user's default timezone.
        date: extraData.date || new Date(),
        name: extraData.name || "",
        headers: extraData.headers || [
          {
            id: "",
            key: "",
            value: "",
          },
        ],
        parameters: extraData.parameters || [
          {
            id: "",
            key: "",
            value: "",
          },
        ],
        body: extraData.body || {
          contentType: "",
          payload: "",
        },
      };
    }

    nextId = (() => {
      let id = 3;
      return function () {
        return (id += 1);
      };
    })();

    calcTime = (date) => {
      return `${String(date.getHours()).padStart(2, "0")}:${date.getMinutes()}`;
    };

    handleChange = (event) => {
      const target = event.target;
      let value = target.value;
      let name = target.name;

      if (target.name === "contentType" || target.name === "payload") {
        let newBody = Object.assign({ ...this.state.body }, { [name]: value });

        this.setState({
          body: newBody,
        });
      } else {
        this.setState({
          [name]: value,
        });
      }
    };

    onCalendarChange = (date) => {
      this.setState({
        date: date,
      });
    };

    // 1. Update frontend state in sidebar (done automatically on submit)
    // 2. Receive boolean from server
    //  - if true, do nothing
    //  - if false, do manage the error
    handleSubmit = (event) => {
      event.preventDefault();
      
      // Change URL in production
      fetch('http://localhost:3001/makerequest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      }).then(response => {
        // Log the response from server
        console.log(response.json());
      });
    };

    addKeyValueFields = (event) => {
      let name = event.target.dataset.name;
      this.setState((prevState) => ({
        [name]: [...prevState[name], { id: this.nextId(), key: "", value: "" }],
      }), () => {
        // Deal with issue
        // Extra key value pairs created if user hits "+" button
        // console.log(this.state);
      });
    };

    editProperty = (event) => {
      let target = event.target;
      let value = target.value;
      let name = target.name;
      let targetId = target.dataset.rowId;
      let type = target.dataset.type;
      let propertyCopy = [...this.state[type]];
      let targetProperty = propertyCopy.find(
        (property) => +property.id === +targetId
      );

      targetProperty[name] = value;
      this.setState({
        [type]: propertyCopy,
      });
    };

    removeKeyValueField = (event) => {
      let target = event.target;
      let targetId = target.dataset.rowId;
      let name = target.dataset.name;
      let newState;

      if (this.state[name].length <= 1) {
        newState = [{ id: this.nextId(), key: "", value: "" }];
      } else {
        newState = this.state[name].filter((property) => {
          return +property.id !== +targetId;
        });
      }

      this.setState({
        [name]: newState,
      });
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          handleSubmit={this.handleSubmit}
          hostpath={this.state.hostpath}
          handleChange={this.handleChange}
          httpVerb={this.state.httpVerb}
          parameters={this.state.parameters}
          name={this.state.name}
          addKeyValueFields={this.addKeyValueFields}
          editProperty={this.editProperty}
          removeKeyValueField={this.removeKeyValueField}
          headers={this.state.headers}
          body={this.state.body}
          onCalendarChange={this.onCalendarChange}
          time={this.state.time}
          timezone={this.state.timezone}
          date={this.state.date}
        />
      );
    }
  };
};

export default FormStateAndMethods;
