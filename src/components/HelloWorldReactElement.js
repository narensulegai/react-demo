import React, {Component} from 'react';

class HelloWorldReactElement extends Component {
    render() {
        return React.createElement('div', null, 'Hello World!');
    }
}

export default HelloWorldReactElement;