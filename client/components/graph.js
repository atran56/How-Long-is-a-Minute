import React, { Component } from "react";
import axios from "axios";
import { render } from "react-dom";
import Chart from "./chart";
import DropDown from "./dropdown";

class Graph extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            intervals: [],
            selectedInterval: "Select Interval",
            stats: [],
        };
        this.handleChange = this.handleChange.bind(this)
    }
    async componentDidMount() {
        const resp = await axios.get('/api/intervals')
        const intervals = resp.data
        this.setState({intervals: intervals})
    }
    async handleChange(event) {
        const interval = event.target.id;
        const stats = await axios.get(`/api/intervals/${interval}`)
        this.setState({stats: stats.data, selectedInterval: event.target.textContent});
        this.forceUpdate()
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <Chart />
                <DropDown dropdownText={this.state.selectedInterval} handleChange={this.handleChange} intervals={this.state.intervals}/>
                
                
            </div>)
    }
}

export default Graph;