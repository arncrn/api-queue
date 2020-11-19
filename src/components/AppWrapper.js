import React from 'react';
import App from './App.js';
import HOC from './HOC.js';

import testData from '../test-data.js';

class AppWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            appData: testData,
        }
    }


    render() {
        let AppForm = HOC(App);

        return (
            <AppForm appData={this.state.appData} />
        )
    }
}

export default AppWrapper;