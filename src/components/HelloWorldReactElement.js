import React, {Component} from 'react';

class HelloWorldReactElement extends Component {
    // This is just an example, use JSX syntax for better readability
    render() {
        return React.createElement('div', null, 'Hello World!');
    }
}

export default HelloWorldReactElement;