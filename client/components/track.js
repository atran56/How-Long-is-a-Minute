import React, { Component } from "react";
import { Button, Container } from 'reactstrap';

class Track extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
render () {
    return (
    <Container>
            <Button color="primary">Start</Button>
            <Button color="danger">Stop</Button>
    </Container>
    )
}
}

export default Track;
