import * as SUPRA from "../dist";

test("Pi", () => {
	expect(typeof SUPRA.PI).toBe("number");
	expect(SUPRA.PI).toBe(3.141592653589793);
	expect(SUPRA.PI).toBe(Math.PI);
});

test("Tau", () => {
	expect(typeof SUPRA.PI).toBe("number");
	expect(SUPRA.TAU).toBe(6.283185307179586);
	expect(SUPRA.TAU).toBe(Math.PI * 2);
});
