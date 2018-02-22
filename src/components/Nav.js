import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            collapsed: true,
        };
    }

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({ collapsed });
    }

    render() {
        const { location } = this.props;
        const { collapsed } = this.state;
        const featuredClass = location.pathname === "/" ? "active" : "";

        return (
            <div>
                <div class="container">
                    <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
                        <span class="sr-only">{this.location || "cheese"}</span>
                    </button>
                </div>
                <div>
                    <ul class="nav navbar-nav">
                        <li><IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink></li>
                        <li><IndexLink to="about" onClick={this.toggleCollapse.bind(this)}>About</IndexLink></li> 
                    </ul>
                </div>
            </div>
        )
    }
}