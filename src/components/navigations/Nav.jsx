import React, {Component} from "react";
import "../../resources/styles/components/navigations/nav.css";

class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                <ul>
                    {this.props.items.map((item, index) => (
                        <li key={index}>
                            <item.icon/>
                            <a href="#">{item.value}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default Nav;