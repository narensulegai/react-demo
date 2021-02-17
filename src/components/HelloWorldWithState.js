import React, {Component} from 'react';

class HelloWorldWithState extends Component {
    state = {
        name: "React"
    }

    handleOnNameChange = (e) => {
        this.setState({name: e.target.value})
    }

    render() {
        return (
            <>
                <div>
                    Hello World from <b>{this.state.name}</b>
                </div>
                <div>
                    <input
                        type="text"
                        onChange={this.handleOnNameChange}
                        placeholder="From name"
                        value={this.state.name}
                    />
                </div>
            </>
        );
    }
}

export default HelloWorldWithState;