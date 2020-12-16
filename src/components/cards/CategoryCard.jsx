import React, {Component} from "react";
import CardMedia from "./CardMedia";
import "../../resources/styles/components/cards/card-category.css";

class CategoryCard extends Component {
    render() {
        return (
            <div className="category-card">
                <CardMedia cover={this.props.cover}/>
                <p>{this.props.name}</p>
            </div>
        );
    }
}

export default CategoryCard;