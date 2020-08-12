import React, {Component} from "react";
import "./event.css";

class Events extends Component {

    open = () => {
        alert("opened!");
    };

    open2 = () => {
        alert("opened 2");
    };

    changeText = event => {
        alert(event.target.value);
    };

    render() {
        return (
            <div>
                {this.props.categories.map((category, index) => {
                    return (
                        <div key={index}>
                            {category.name}
                            <img src={category.image} className="image"/>
                        </div>
                    );
                })}



                {/* <button onClick={this.open}>Click</button>
                <button onClick={() => this.open2()}>Click 2</button>
                <input onChange={event => this.changeText(event)}/>
                <input onChange={this.changeText}/> */}
            </div>
        );
    }
}

export default Events;