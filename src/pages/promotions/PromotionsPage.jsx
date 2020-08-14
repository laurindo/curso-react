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

class PromotionsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            promotions: []
        };
    }

    componentDidMount() {
        axios
        .get("https://delivery-food-api-react.herokuapp.com/promotions")
        .then(response => {
            this.setState({promotions: response.data})
        })
    }

    displayPromotions = () => {
        return this.state.promotions.map((promotion, index) => {
            return (
                <Card key={index}>
                    <CardMedia 
                        logo={promotion.company.logo}
                        cover={promotion.product.image}
                    />
                    <CardContent
                        title={promotion.product.title}
                        description={promotion.product.description}
                    />
                    <PriceLabel current={promotion.price.current} before={promotion.price.before}/>
                    <DeliveryLabel tax={promotion.delivery.tax} time={promotion.delivery.time} />
                </Card>
            );
        });
    };

    render() {
        return (
            <Section 
                title="Promoções perto de você" 
                description="Pra sua fome de desconto"
            >
                <Grid>
                    {this.displayPromotions()}
                </Grid>
            </Section>
        );
    }
}

export default PromotionsPage;