import React, {Component} from "react";

class Scroll extends Component {
    render() {
        return(
            <div style={{ overflow: 'scroll', border: '5px solid black', height: '700px', margin: '10px'}}>
                {this.props.children}
            </div>
        );
    }
}

export default Scroll;