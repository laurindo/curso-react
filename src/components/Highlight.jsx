import React, {Component} from "react";
import "../resources/styles/components/highlight.css";

class Highlight extends Component {
    constructor(props) {
        super(props);
        this.images = [
            "https://res.cloudinary.com/luneswallet/image/upload/v1597426239/curso-react/ifood_capas_cafe_manha_abr_20.webp",
            "https://res.cloudinary.com/luneswallet/image/upload/v1597426239/curso-react/GROC_ifood.webp",
            "https://res.cloudinary.com/luneswallet/image/upload/v1597426239/curso-react/ifood_capas_rest_entrega_gratis_abr_20.webp"
        ];
    }

    render() {
        return (
            <div className={`highlight ${this.props.className}`}>
                {this.images.map((image, index) => (
                    <img key={index} src={image} alt="destaques do dia"/>
                ))}    
            </div>
        );
    }
}

export default Highlight;