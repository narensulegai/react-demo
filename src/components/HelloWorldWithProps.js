import React, {Component} from 'react';

class HelloWorldWithProps extends Component {

    render() {
        return (
            <div>
                Hello World from <b>{this.props.name}</b>
            </div>
        );
    }
}

export default HelloWorldWithProps;