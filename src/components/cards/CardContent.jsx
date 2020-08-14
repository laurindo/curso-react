import React, {Component} from "react";
import "../../resources/styles/components/cards/card-content.css";

class CardContent extends Component {
    render() {
        return (
            <div className="card-content">
                <h3 className="title">{this.props.title}</h3>
                <p className="description truncate">{this.props.description}</p>
            </div>
        );
    }
}

export default CardContent;