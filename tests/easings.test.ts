import * as SUPRA from "../dist";

test("Lerp", () => {
	expect(typeof SUPRA.lerp(0, 0, 0)).toBe("number");
	expect(SUPRA.lerp(0, 1, 0)).toBe(0);
	expect(SUPRA.lerp(0, 8, 0.5)).toBe(4);
	expect(SUPRA.lerp(0, SUPRA.PI, 1)).toBe(SUPRA.PI);
});

test("Inverse Lerp", () => {
	expect(typeof SUPRA.invLerp(0, 0, 0)).toBe("number");
	expect(SUPRA.invLerp(0, 10, 2)).toBe(0.2);
	expect(SUPRA.invLerp(0, 1, 0.1)).toBe(0.1);
	expect(SUPRA.invLerp(10, -2, 4)).toBe(0.5);
});

test("Remap", () => {
	expect(typeof SUPRA.remap(0, 0, 0, 0, 0)).toBe("number");
	expect(SUPRA.remap(0, 1, 0, 10, 0.2)).toBe(2);
	expect(SUPRA.remap(-10, 10, 0, 100, 0)).toBe(50);
	expect(SUPRA.remap(1, 0, 0, 1, 0)).toBe(1);
});
