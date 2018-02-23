import React from "react";
import { Link } from "react-router";


import Nav from "../components/Nav";

export default class Layout extends React.Component {
    render() {
        const name = "tim";
        const { location } = this.props;
        const containerStyle = { marginTop: "60px" };

        return (
            <div>
                <Nav location={location} />
                <div class="container" style={containerStyle}>
                    <div class="row">
                        <div class="col-lg-12">
                            <h1>Layout Header</h1>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}