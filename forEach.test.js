const forEach = require('./forEach')

const mockCallback = jest.fn();

forEach(['Hello', 'World'], mockCallback)

test('calls a mock function', () => {
	// The mock function is called twice
	expect(mockCallback.mock.calls.length).toBe(2)
})

test('provides the right arguments to function', () => {
	// The first argument of the first call to the function was 'Hello'
	expect(mockCallback.mock.calls[0][0]).toBe('Hello')

// The first argument of the second call to the function was 1
	expect(mockCallback.mock.calls[1][0]).toBe('World')
})
