import {render, screen, fireEvent} from '@testing-library/react';
import Ticker from './Ticker';

const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
};

window.alert = () => {
}

test('ticker should tick', async () => {
    render(<Ticker/>);
    const tick = screen.getByTestId('tick-number');
    expect(tick.textContent).toBe('0');
    await sleep(1500);
    expect(tick.textContent).toBe('1');
});