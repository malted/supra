/** @module Matrices */

/**
 * Creates a new 2x2 identity matrix.
 * @returns Float32Array
 */
function mat2(): Float32Array {
	const a = new Float32Array(4);
	a[0] = a[3] = 1;
	return a;
	/*
        1, 0, 
        0, 1,
    */
}

/**
 * Creates a new 3x3 identity matrix.
 * @returns Float32Array
 */
function mat3(): Float32Array {
	const a = new Float32Array(9);
	a[0] = a[4] = a[8] = 1;
	return a;
	/*
        1, 0, 0,
        0, 1, 0,
        0, 0, 1,
    */
}

/**
 * Creates a new 4x4 identity matrix.
 * @returns Float32Array
 */
function mat4(): Float32Array {
	const a = new Float32Array(16);
	a[0] = a[5] = a[10] = a[15] = 1;
	return a;
	/*
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1,
    */
}

export { mat2, mat3, mat4 };
