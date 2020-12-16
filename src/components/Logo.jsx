import React, {Component} from "react";
import "../resources/styles/components/logo.css";

class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <img 
                    src="https://res.cloudinary.com/luneswallet/image/upload/v1597583374/curso-react/logo/logo-delivery-food.png" 
                    alt="logo da empresa"
                />
            </div>
        );
    }
}

export default Logo;