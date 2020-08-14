import React, {Component} from "react";
import "../resources/styles/components/logo.css";

class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <img 
                    src="https://res.cloudinary.com/luneswallet/image/upload/v1597408596/curso-react/logo/food-delivery.png" 
                    alt="logo da empresa"
                />
                <small>Delivery Food</small>
            </div>
        );
    }
}

export default Logo;