import React, {Component} from 'react';

class Ticker extends Component {

    state = {
        cancelInterval: null,
        tick: 0
    }

    componentDidMount() {
        const cancelInterval = setInterval(() => {
            this.setState(({tick}) => ({tick: tick + 1}));
        }, 1000);
        this.setState({cancelInterval});
    }

    componentWillUnmount() {
        window.alert('Clearing interval');
        clearInterval(this.state.cancelInterval);
    }

    render() {
        return (
            <h1>
                {this.state.tick}
            </h1>
        );
    }
}

export default Ticker;