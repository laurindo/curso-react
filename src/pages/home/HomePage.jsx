import React, {Component} from "react";
import axios from "axios";
import Highlight from "../../components/Highlight";
import Section from "../../components/Section";
import CategoryCard from "../../components/cards/CategoryCard";
import Slide from "../../components/slides/Slide";
import SlideLoop from "../../components/slides/SlideLoop";
import "../../resources/styles/pages/home-page.css";
import CardMedia from "../../components/cards/CardMedia";
import CardContent from "../../components/cards/CardContent";
import WideCard from "../../components/cards/WideCard";
import SuperStampLabel from "../../components/labels/SuperStampLabel";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            plates: []
        };
    }

    componentDidMount() {
        axios
        .get("https://delivery-food-api-react.herokuapp.com/categories")
        .then(response => {
            if (response.data && response.data.length) {
                const categories = response.data.map((category) => {
                    return {
                        cover: category.image,
                        name: category.name
                    };
                })
                this.setState({categories: categories})
            }
        })

        axios
        .get("https://delivery-food-api-react.herokuapp.com/plates")
        .then(response => {
            this.setState({plates: response.data})
        })
    }

    render() {
        return (
            <div className="limit-width">
                <Slide 
                    items={this.state.categories} 
                    component={CategoryCard}
                    settings={{slidesToShow: 8, dots: false}}
                />

                <Highlight className="highlight home-highlight"/>
                <Section
                    title="Delivery Food: Entrega Grátis"
                    description="Deliciosos e sem taxas"
                >
                    <SlideLoop 
                        items={this.state.plates} 
                        settings={{slidesToShow: 6, dots: false}}
                    />
                </Section>

                <Section 
                    title="Restaurantes e mercados"
                    className="wide-card-container"
                >
                    {[1,2,3,4,5,6].map((_, index) => (
                        <WideCard key={index}>
                            <CardMedia cover="https://res.cloudinary.com/luneswallet/image/upload/v1597252449/curso-react/logo/photo-1588155664232-8aa20befe9e7.jpg"/>
                            <CardContent title="Azilados 24h">
                                <SuperStampLabel/>
                            </CardContent>
                            {/* 
                            <CardMedia image=""/>
                            <CardContent title="Azilados 24h"/>
                            <DeliveryLabel 
                                evaluation={{
                                    type: "simple",
                                    total: 1200,
                                    avg: 4.8
                                }}
                                distance={1.7}
                                category="Lanches"
                            />
                            <DeliveryLabel time="10-20min" tax="Entrega Grátis"/> */}
                        </WideCard>
                    ))}
                </Section>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        );
    }
}

export default HomePage;