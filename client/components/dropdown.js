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
        const handleChange = this.props.handleChange;
        const items = intervals.map(interval => {
            return <DropdownItem key={interval.time} id={interval._id} onClick={handleChange}>{interval.time}</DropdownItem>
        })
        return (
            <div>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                            {this.props.dropdownText}
                    </DropdownToggle>
                    <DropdownMenu>
                        {items}
                    </DropdownMenu>
                </Dropdown>
            </div>
        )
    }
}

export default DropDown