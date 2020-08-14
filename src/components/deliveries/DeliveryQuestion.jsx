import React, {Component} from "react";
import "../../resources/styles/components/deliveries/delivery-question.css";

class DeliveryQuestion extends Component {
    render() {
        return (
            <div className="delivery-question">
                <p className="title">ENTREGAR EM</p>
                <div className="info">
                    <img 
                        src="https://res.cloudinary.com/luneswallet/image/upload/v1597410443/curso-react/logo/pin.svg" 
                        alt="icone de entrega"
                        className="pin-icon"
                    />
                    <div className="address">
                        <label>Próximo ao Meireles</label>
                        <img 
                            src="https://res.cloudinary.com/luneswallet/image/upload/v1597410587/curso-react/logo/down-arrow.svg" 
                            alt="icone de escolha"
                            className="arrow-icon"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default DeliveryQuestion;