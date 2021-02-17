import {render, screen, fireEvent} from '@testing-library/react';
import HelloWorldWithState from './HelloWorldWithState';

test('greets by name in the input box', () => {
    render(<HelloWorldWithState/>);
    const inputBox = screen.getByTestId('name-input-box');
    fireEvent.change(inputBox, {target: {value: '273'}});
    expect(inputBox.value).toBe('273');
});
