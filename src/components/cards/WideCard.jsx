import React, {Component} from "react";
import "../../resources/styles/components/cards/wide-card.css";

class WideCard extends Component {
    render() {
        return (
            <div className={`wide-card ${this.props.className}`}>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default WideCard;