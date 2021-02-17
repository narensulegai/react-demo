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
                    {/*This is an example of controlled input, you can use uncontrolled inputs too,
                    but stick to controlled input unless you absolutely need uncontrolled input*/}
                    <input
                        data-testid="name-input-box"
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