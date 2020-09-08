import hexColors from "./main";

describe('a hex colors function...', () => {
	test('should return #000000 for 0,0,0', () => {
		expect(hexColors(0,0,0)).toBe('#000000');
	})
	test('should return #FF6347 for 255,99,71', () => {
		expect(hexColors(255,99,71)).toBe('#FF6347');
	})
	test('should return #B8860B for 184, 134, 11', () => {
		expect(hexColors(184, 134, 11)).toBe('#B8860B');
	})
	test('should return #BDB76B for 189, 183, 107', () => {
		expect(hexColors(189, 183, 107)).toBe('#BDB76B');
	})
	test('should return #0000CD for 0, 0, 205', () => {
		expect(hexColors(0, 0, 205)).toBe('#0000CD');
	})
})