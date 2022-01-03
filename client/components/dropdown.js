import React, { Component } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class DropDown extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            dropdownOpen: false
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    render(){
        const intervals = this.props.intervals;
        console.log(intervals)
        return (
            <div>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                            Select Interval
                    </DropdownToggle>
                    <DropdownMenu>
                        {intervals.map(interval => {
                            return <DropdownItem key={interval._id}>{interval.time} millisecond(s)</DropdownItem>
                        })}
                    </DropdownMenu>
                </Dropdown>
            </div>
        )
    }
}

export default DropDown