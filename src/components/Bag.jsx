import React, {Component} from "react";
import emptyBag from "../resources/images/emptyBag.svg";
import "../resources/styles/components/bag.css";

class Bag extends Component {
    render() {
        return (
            <div className="bag">
                <img src={emptyBag}/>
                <span className="title-empty">Sua sacola está vazia</span>
                <span className="empty">Adicione itens</span>
            </div>
        );
    }
}

export default Bag;