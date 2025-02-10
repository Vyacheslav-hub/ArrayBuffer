import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

describe('ArrayBufferConverter', () => {
  test('should load buffer correctly', () => {
    const converter = new ArrayBufferConverter();
    const buffer = getBuffer();
    converter.load(buffer);
    expect(converter.buffer).toEqual(buffer);
  });

  test('should convert buffer to string correctly', () => {
    const converter = new ArrayBufferConverter();
    const buffer = getBuffer();
    converter.load(buffer);
    const result = converter.toString();
    expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  });

  test('should throw an error when buffer is not loaded', () => {
    const converter = new ArrayBufferConverter();
    expect(() => converter.toString()).toThrow('Buffer is not loaded.');
  });
});
