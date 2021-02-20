import React, {Component} from 'react';

class HelloWorldApi extends Component {

    state = {
        jsFrameworks: []
    }

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        const r = await fetch("./jsFrameworks.json");
        const jsFrameworks = await r.json();
        this.setState({jsFrameworks});
    }

    render() {
        return (
            <>
                <div>
                    {this.state.jsFrameworks.length === 0 ? 'No frameworks to show' : null}
                </div>
                <div>
                    {this.state.jsFrameworks.map(f => {
                        return <div key={f.name}>
                            <a href={f.url}>{f.name}</a>
                        </div>
                    })}
                </div>
            </>
        );
    }
}

export default HelloWorldApi;