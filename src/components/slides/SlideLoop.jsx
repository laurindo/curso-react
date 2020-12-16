import React, {Component} from "react";
import Slider from "react-slick";
import Arrow from "./Arrow";
import Card from "../cards/Card";
import CardContent from "../cards/CardContent";
import CardMedia from "../cards/CardMedia";
import PriceLabel from "../labels/PriceLabel";
import "../../resources/styles/components/slides/slide.css";

class SlideLoop extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <Arrow />,
            prevArrow: <Arrow />,
            ...this.props.settings
          };
        return (
            <div className="slide">
                <Slider {...settings}>
                    {this.props.items.map((item, index) => (
                        <Card key={index} className="slide-card">
                            <CardMedia 
                                cover={item.product.image}
                            />
                            <CardContent
                                title={item.product.title}
                            />
                            <PriceLabel 
                                current={item.price.current} 
                                before={item.price.before}
                            />
                        </Card>
                    ))}
                </Slider>
            </div>
        );
    }
}

export default SlideLoop;