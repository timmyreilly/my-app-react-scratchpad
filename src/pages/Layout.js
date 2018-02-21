import React from "react";
import { Link } from "react-router";
import Game from "../game/TicTacToe";
import Nav from "../components/Nav.js"; 

export default class Layout extends React.Component {
    render() {
        const name = "tim";
        const { location } = this.props; 

        return (
            <div>
                <Nav location={location} /> 
                <h1> Whatcha Need</h1>
                <Game></Game> 
            </div>
        );
    }
}