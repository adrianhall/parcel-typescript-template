export function testSyncFunction(): number {
  return 42;
}

export function testAsyncFunction(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(42);
    }, 250);
  });
}

export function testExceptionFunction(): void {
  throw new Error('test-error');
}

export function testCallbackFunction(callback: (value: number) => void): void {
  callback(42);
}
