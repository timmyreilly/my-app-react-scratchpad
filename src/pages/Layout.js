import React from "react";
import { Link } from "react-router";


import Nav from "../components/Nav"; 

export default class Layout extends React.Component {
    render() {
        const name = "tim";
        const { location } = this.props; 

        return (
            <div>
                <Nav location={location} /> 
                <h1> LAYOUT HEADER</h1>
                {this.props.children}
            </div>
        );
    }
}