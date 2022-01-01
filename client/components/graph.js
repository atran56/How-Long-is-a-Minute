import React, { Component } from "react";
import c3 from "c3";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Graph = () => {
    React.useEffect(() => {
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
    });
    }, []);
    
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
};

export default Graph;