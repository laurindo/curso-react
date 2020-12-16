import React, {Component} from "react";
import "../resources/styles/components/section.css";

class Section extends Component {
    render() {
        return (
            <div className={`section ${this.props.className}`}>
                <div className="header">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.description}</p>
                </div>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Section;