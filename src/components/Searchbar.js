import React, {Component} from "react";

class Searchbar extends Component {
    render() {
        return (
            <div>
                <input 
                className="pa3 ba b-green bg-white"
                type="search"
                placeholder="Search pokemon..."
                onChange={this.props.searchChange}
                />
            </div>
        );
    }
}

export default Searchbar;