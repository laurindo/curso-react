import React, {Component} from "react";

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
                <button onClick={this.open}>Click</button>
                <button onClick={() => this.open2()}>Click 2</button>

                <input onChange={event => this.changeText(event)}/>
                <input onChange={this.changeText}/>
            </div>
        );
    }
}

export default Events;