import * as SUPRA from "../dist";

test("Mat2", () => {
	const matrix = SUPRA.mat2();
	expect(typeof matrix).toBe("object");
	expect(matrix.length).toBe(4);
	expect(matrix[0]).toBe(1);
	expect(matrix[1]).toBe(0);
	expect(matrix[matrix.length - 1]).toBe(1);
});

test("Mat3", () => {
	const matrix = SUPRA.mat3();
	expect(typeof matrix).toBe("object");
	expect(matrix.length).toBe(9);
	expect(matrix[0]).toBe(1);
	expect(matrix[1]).toBe(0);
	expect(matrix[matrix.length - 1]).toBe(1);
});

test("Mat4", () => {
	const matrix = SUPRA.mat4();
	expect(typeof matrix).toBe("object");
	expect(matrix.length).toBe(16);
	expect(matrix[0]).toBe(1);
	expect(matrix[1]).toBe(0);
	expect(matrix[matrix.length - 1]).toBe(1);
});
