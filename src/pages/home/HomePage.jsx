import React, {Component} from "react";
import axios from "axios";

import Card from '../../components/cards/Card';
import CardMedia from '../../components/cards/CardMedia';
import CardContent from '../../components/cards/CardContent';
import PriceLabel from '../../components/labels/PriceLabel';
import DeliveryLabel from '../../components/labels/DeliveryLabel';
import Section from '../../components/Section';
import Grid from '../../components/Grid';

import "../../resources/styles/pages/promotions/promotions-page.css";

class HomePage extends Component {
    render() {
        return (
            <div>
                <header>
                    <p>Delivery Food</p>
                    campo de busca
                    info da entrega
                    link de promocoes
                    Link Entrar
                    Sacola
                </header>
                <div>lkjlkj</div>
            </div>
        );
    }
}

export default HomePage;