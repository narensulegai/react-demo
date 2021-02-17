import React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import HelloWorldApi from './HelloWorldApi'

const server = setupServer(
    rest.get('/jsFrameworks.json', (req, res, ctx) => {
        return res(ctx.json([{name: 'ReactJS', url: 'http://react.com'}]))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('loads and displays list of JavaScript frameworks', async () => {
    render(<HelloWorldApi/>);
    const nothingToShow = screen.getByText(/No frameworks to show/i);
    expect(nothingToShow).toBeInTheDocument();
    await waitFor(() => screen.getByText(/ReactJS/i))
    expect(screen.getByText('ReactJS').href).toBe("http://react.com/")
})