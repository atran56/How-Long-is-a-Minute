import Axios from 'axios';
import React, { Component } from "react";
import { Button, Container } from 'reactstrap';
import Results from "./results";

class Track extends React.Component {
    constructor() {
        super();
        this.state = {
            startTime: null,
            secGuess: null
        }
        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
    }
    handleStart() {
        this.setState({startTime: Date.now()});
    }
    async handleStop() {
        try {
            const guess = Date.now() - this.state.startTime;
            await Axios.post('/api/statistics', {"guess": guess});
            this.setState({secGuess: guess/1000})
        }
        catch (error) {
            console.log("something went wrong with handleStop:", error)
        }
    }
    render () {
        return (
        <Container>
                {!this.state.startTime ? <Button color="primary" onClick={this.handleStart}>Start</Button>
                : <Button color="danger" onClick={this.handleStop}>Stop</Button>}
                {this.state.secGuess ? <Results guess={this.state.secGuess}/> : null}
        </Container>
        )
    }
}

export default Track;
