import React, {Component} from "react";

class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
    }

    changeText = event => {
        this.setState({
            text: event.target.value    
        });
    };

    render() {
        return (
            <input 
                placeholder={this.props.placeholder}
                value={this.state.text}
                onChange={this.props.changeText}
            />
        );    
    }
}

export default InputField;