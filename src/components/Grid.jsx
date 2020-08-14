import React, {Component} from "react";
import "../resources/styles/components/grid.css";

class Grid extends Component {
    render() {
        return (
            <div className="grid-container">
                <div className="grid">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Grid;