import React, {Component} from "react";
import { FiPercent, FiLogIn, FiShoppingBag } from "react-icons/fi";
import Logo from "./Logo";
import InputField from "./inputs/InputField";
import DeliveryQuestion from "./deliveries/DeliveryQuestion";
import Nav from "./navigations/Nav";
import "../resources/styles/components/header.css";

class Header extends Component {
    constructor(props) {
        super(props);
        this.items = [{
            icon: FiPercent,
            value: "Promoções"
        }, {
            icon: FiLogIn,
            value: "Entrar"
        }, {
            icon: FiShoppingBag,
            value: "Sacola"
        }];
    }

    render() {
        return (
            <header>
                <Logo/>
                <div className="search-delivery">
                    <InputField placeholder="Buscar por item ou loja"/>
                    <DeliveryQuestion/>
                </div>
                <Nav items={this.items} position="horizontal"/>
            </header>
        );
    }
}

export default Header;