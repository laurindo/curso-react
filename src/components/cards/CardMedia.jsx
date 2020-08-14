import React, {Component} from "react";
import "../../resources/styles/components/cards/card-media.css";

class CardMedia extends Component {
    render() {
        return (
            <div className="card-media">
                <img src={this.props.logo} className="logo" />
                <img src={this.props.cover} className="cover" />
            </div>
        );
    }
}

export default CardMedia;