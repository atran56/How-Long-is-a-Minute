import React, { Component } from "react";
import c3 from "c3";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { render } from "react-dom";

class Graph extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        c3.generate({
        bindto: "#chart",
        data: {
            columns: [
            ["Guess", 30, 200, 100, 400, 150, 250]
            ],
            type: "bar",
        },
        axis: {
            y: {
                label: {
                    text: 'Frequency',
                    position: 'outer-middle'
                }
            }
        }
    }), []}
    render() {
        return (
            <div>
                <div id="chart" />
                <Dropdown>
                <DropdownToggle caret>
                    Dropdown
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
                </Dropdown>
            </div>)
    }
}

export default Graph;