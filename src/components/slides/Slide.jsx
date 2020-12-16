import React, {Component} from "react";
import Slider from "react-slick";
import Arrow from "./Arrow";
import "../../resources/styles/components/slides/slide.css";

class Slide extends Component {
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
            <div className={`slide ${this.props.className}`}>
                <Slider {...settings}>
                    {this.props.items.map((item, index) => (
                        <div key={index}>
                            <this.props.component 
                                name={item.name}
                                cover={item.cover}
                            />    
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

export default Slide;