/** @module Easings */

/**
 * Linearly interpolates a to b with respect to t.
 * @param {number} a The start value. When t is equal to 0, the output of the function is equal to this value.
 * @param {number} b The end value. When t is equal to 1, the output of the function is equal to this value.
 * @param {number} t The interpolant.
 * @returns number
 */
function lerp(a: number, b: number, t: number): number {
	return (1 - t) * a + b * t;
}

/**
 * A value between zero and one, representing where the "value" parameter falls within the range defined by a and b.
 * @param {number} a The start of the range.
 * @param {number} b The end of the range.
 * @param {number} value The point within the range you want to calculate.
 * @returns number
 */
function invLerp(a: number, b: number, value: number): number {
	return (value - a) / (b - a);
}

/**
 * Remaps a value from an input range to an output range.
 * @param {number} iMin The input range lower bound.
 * @param {number} iMax The input range upper bound.
 * @param {number} oMin The output range lower bound.
 * @param {number} oMax The output range upper bound.
 * @param {number} v The value to be remapped.
 * @returns number
 */
function remap(
	iMin: number,
	iMax: number,
	oMin: number,
	oMax: number,
	v: number
): number {
	return lerp(oMin, oMax, invLerp(iMin, iMax, v));
}

export { lerp, invLerp, remap };
