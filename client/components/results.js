import React, { Component } from "react";
import { Button, Container } from 'reactstrap';

const Results = (props) => {
    const guess = props.guess
    return (
        <Container>
                <h1>{guess} Seconds</h1>
                <Button color="primary">Compare your minute with other users</Button>
        </Container>
    )
}

export default Results;
