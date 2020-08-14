import React, {Component} from "react";
import "../../resources/styles/components/labels/delivery-label.css";

class DeliveryLabel extends Component {
    render() {
        return (
            <div className="delivery-label">
                <p className="time">{this.props.time}</p>
                <p className="bull">&bull;</p>
                <p className="tax">{this.props.tax}</p>
            </div>
        );
    }
}

export default DeliveryLabel;