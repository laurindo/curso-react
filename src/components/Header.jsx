import React, {Component} from "react";
import { FiPercent, FiLogIn, FiShoppingBag } from "react-icons/fi";
import Logo from "./Logo";
import InputField from "./inputs/InputField";
import DeliveryQuestion from "./deliveries/DeliveryQuestion";
import Nav from "./navigations/Nav";
import Bag from "./Bag";
import "../resources/styles/components/header.css";

class Header extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.items = [{
            icon: FiPercent,
            value: "Promoções"
        }, {
            icon: FiLogIn,
            value: "Entrar",
            onClick: () => this.props.history.push("/entrar")
        }, {
            icon: FiShoppingBag,
            value: "Sacola",
            onClick: this.openBag
        }];
        this.state = {
            isOpenBag: false
        };
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleOutsideClick);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleOutsideClick);
    }

    openBag = e => {
        this.setState({isOpenBag: true});    
    };

    handleOutsideClick = e => {
        if (this.wrapperRef 
            && this.wrapperRef.current
            && !this.wrapperRef.current.contains(e.target)
        ) {
            this.setState({isOpenBag: false});
        }
    };

    render() {
        return (
            <header>
                <div className="limit-width">
                    <Logo/>
                    <div className="search-delivery">
                        <InputField placeholder="Buscar por item ou loja"/>
                        <DeliveryQuestion/>
                    </div>
                    <Nav items={this.items} position="horizontal"/>
                </div>
                {this.state.isOpenBag && (
                    <div ref={this.wrapperRef} className="container-bag">
                        <Bag/>
                    </div>
                )}
            </header>
        );
    }
}

export default Header;