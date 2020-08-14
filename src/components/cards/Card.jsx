import React, {Component} from "react";
import "../../resources/styles/components/cards/card.css";

class Card extends Component {
    render() {
        return (
            <div className="card">
                {this.props.children}
            </div>
        );
    }
}

export default Card;