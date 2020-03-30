/* eslint-env jest */
import * as examples from './example';

describe('examples', () => {
  it('handles a basic assertion', () => {
    expect(42).toBe(42);
  });

  it('handles a function call', () => {
    expect(examples.testSyncFunction()).toBe(42);
  });

  it('handles an async function', async () => {
    const actual = await examples.testAsyncFunction();
    expect(actual).toBe(42);
  });

  it('handles callbacks', () => {
    const callback = jest.fn();
    examples.testCallbackFunction(callback);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(42);
  });

  it('handles exceptions', () => {
    expect(() => {
      examples.testExceptionFunction();
    }).toThrowError();
  });
});