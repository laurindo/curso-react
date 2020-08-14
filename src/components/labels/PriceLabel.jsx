import React, {Component} from "react";
import "../../resources/styles/components/labels/price-label.css";

class PriceLabel extends Component {
    render() {
        return (
            <div className="price-label">
                <p className="current">R$ {this.props.current}</p>
                <p className="before">R$ {this.props.before}</p>
            </div>
        );
    }
}

export default PriceLabel;