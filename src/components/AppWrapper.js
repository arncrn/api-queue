import React from 'react';
import App from './App.js';
import HOC from './HOC.js';

import testData from '../test-data.js';

class AppWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            appData: [],
        }
    }

    shouldComponentUpdate(prevProps, prevState) {
        let updatedData = prevState.appData.length !== this.state.appData.length;
        return updatedData;
    }

    // componentDidMount() {
    //     this.setState({
    //         appData: testData,
    //     })
    // }

    componentDidMount() {
        fetch('http://localhost:3001/allrequests').then(response => {
        return response.json();
        }).then(response => {
            this.setState({ appData: response });
        });
    }

    updateData = (newData) => {
        this.setState({
            appData: [...this.state.appData, newData],
        })
    }


    render() {
        console.log('updating');
        let AppForm = HOC(App);

        return (
            <AppForm 
                appData={this.state.appData} 
                updateData={this.updateData}
            />
        )
    }
}

export default AppWrapper;