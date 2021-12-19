import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom';
import Track from './Track';


class Root extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <main />
                    <Route exact path="/" component={Track} />
                </div>
            </Router>
        )
    }
}


export default Root