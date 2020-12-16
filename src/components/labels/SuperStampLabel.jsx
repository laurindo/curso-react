import React, {Component} from "react";
import {FaMedal} from "react-icons/fa";
import "../../resources/styles/components/labels/super-stamp-label.css";

class SuperStampLabel extends Component {
    render() {
        return (
            <div className="super-stamp-label">
                <FaMedal className="super-stamp"/>
            </div>
        );
    }
}

export default SuperStampLabel;