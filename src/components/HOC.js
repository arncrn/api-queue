import React, { Component } from "react";
import { DataContext } from './data-context'

const FormStateAndMethods = (WrappedComponent, extraData = {}) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        httpVerb: extraData.httpVerb || "GET",
        hostpath: extraData.hostpath || "",
        time: extraData.time || this.calcTime(new Date()),
        timeZone: extraData.timeZone || "", // this will be set to user's default timezone.
        date: extraData.date || new Date(),
        name: extraData.name || "",
        headers: extraData.headers || [
          {
            id: this.nextId(),
            key: "",
            value: "",
          },
        ],
        parameters: extraData.parameters || [
          {
            id: this.nextId(),
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

    static contextType = DataContext;

    nextId = () => {
      let id = new Date().valueOf();
      return id;
    }

    calcTime = (date) => {
      return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
    };

    handleChange = (event) => {
      event.preventDefault();
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

    invalid = (newData) => {
      return newData.hostpath.length < 1;
    }

    handleSubmit = (event, formUrl) => {
      event.preventDefault();

      let newData = Object.assign({}, this.state);

      if (this.invalid(newData)) return;

      if (typeof newData.date === "string") {
        console.log('if ran')
        newData.date = newData.date.split('T')[0];
      } else {
        console.log('else ran')
        let day = newData.date.getDate();
        let month = newData.date.getMonth() + 1;
        let year = newData.date.getFullYear();
        newData.date = `${year}-${month}-${day}`;
      }

      // Change URL in production
      // '2020-11-25 12:24:00 CST'
      console.log(newData.date);
      console.log("1. Frontend form sends user request to OUR server", Date.now());
      fetch(formUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
      }).then( () => {
        console.log("7. Frontend receives response from server", Date.now());
        this.props.updateData();
      })
    };

    addKeyValueFields = (event) => {
      let name = event.target.dataset.name;

      this.setState((prevState) => ({
        [name]: [...prevState[name], { id: this.nextId(), key: "", value: "" }],
      }), () => {
        // Deal with issue
        // Extra key value pairs created if user hits "+" button
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
      // console.log(Object.getPrototypeOf(this.state.date));
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
          timezone={this.state.timeZone}
          date={this.state.date}
        />
      );
    }
  };
};

export default FormStateAndMethods;
