/** @module Angles */

/**
 * The mathematical constant π.
 * The ratio of a circle's circumference to its diameter.
 * Approximately equal to 3.14159.
 * @returns number
 */
const PI = Math.PI;

/**
 * The mathematical constant τ.
 * Is equivalent to 2π, or the number of radians in a circle.
 * Approximately equal to 6.28318.
 * @returns number
 */
const TAU = Math.PI * 2;

/**
 * Converts radians to degrees.
 * @param {number} radians
 * @returns number
 */
function deg(radians: number): number {
	return (radians * 180) / Math.PI;
}

/**
 * Converts degrees to radians.
 * @param {number} degrees
 * @returns number
 */
function rad(degrees: number): number {
	return (degrees * Math.PI) / 180;
}

export { PI, TAU, deg, rad };
