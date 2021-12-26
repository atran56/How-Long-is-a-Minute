import React, { Component } from "react";
import Graph from './graph';
import { Button, Container } from 'reactstrap';

class Results extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showGraph: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({showGraph: true})
    }
    render() {
        const guess = this.props.guess
        return (
            <Container>
                    {!this.state.showGraph ? <div><h1>{guess} Seconds</h1>
                    <Button color="primary" onClick={this.handleClick}>Compare your minute with other users</Button>
                    </div>
                    : <Graph />}
                    
            </Container>
        )
    }
    
}

export default Results;
