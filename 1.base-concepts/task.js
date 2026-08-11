"use strict";

function solveEquation(a, b, c) {
	const d = b ** 2 - 4 * a * c;

	if (d < 0) {
		return [];
	}

	if (d === 0) {
		return [-b / (2 * a)];
	}

	return [
		(-b + Math.sqrt(d)) / (2 * a),
		(-b - Math.sqrt(d)) / (2 * a)
	];
}
function testCase() {
  console.log('Тест 1 (два корня):', solveEquation(1, -3, 2)); // [2, 1]
  console.log('Тест 2 (один корень):', solveEquation(1, 2, 1)); // [-1]
  console.log('Тест 3 (нет корней):', solveEquation(1, 0, 1));  // []
}

testCase();