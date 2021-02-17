import {render, screen} from '@testing-library/react';
import HelloWorld from './HelloWorld';

test('renders hello world', () => {
    render(<HelloWorld/>);
    const helloWorldText = screen.getByText(/Hello World!/i);
    expect(helloWorldText).toBeInTheDocument();
});
