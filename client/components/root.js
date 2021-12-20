import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import Track from './Track';


class Root extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <main>
                        <Routes>
                            <Route exact path="/" element={<Track />} />
                        </Routes>
                    </main>
                </div>
            </Router>
        )
    }
}


export default Root