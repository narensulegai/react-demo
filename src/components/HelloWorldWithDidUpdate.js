import React, {Component} from 'react';

class HelloWorldWithDidUpdate extends Component {

    state = {
        name: 'Unknown'
    }
    // You will be using this hook sparingly
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.name !== prevProps.name) {
            this.setState({name: prevProps.name});
        }
    }

    render() {
        return (
            <div>Hello World from {this.state.name}</div>
        );
    }
}

export default HelloWorldWithDidUpdate;