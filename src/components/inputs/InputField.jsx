import React, {Component} from "react";
import "../../resources/styles/components/inputs/input-field.css";

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
            <div className="input-field">
                <img 
                    src="https://res.cloudinary.com/luneswallet/image/upload/v1597409317/curso-react/logo/search.svg" 
                    alt="icone de busca"
                />
                <input 
                    placeholder={this.props.placeholder}
                    value={this.state.text}
                    onChange={this.props.changeText}
                />
            </div>
        );    
    }
}

export default InputField;