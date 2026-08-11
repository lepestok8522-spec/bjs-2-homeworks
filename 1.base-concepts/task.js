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

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	// Преобразуем параметры в числа
	percent = Number(percent);
	contribution = Number(contribution);
	amount = Number(amount);
	countMonths = Number(countMonths);

	// Если хотя бы один параметр не число — возвращаем false
	if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
		return false;
	}

	// Преобразуем годовую ставку в месячную (из процентов в долю)
	const monthlyPercent = percent / 100 / 12;

	// Тело кредита
	const creditBody = amount - contribution;

	// Если тело кредита 0 или меньше — клиент ничего не должен
	if (creditBody <= 0) {
		return 0;
	}

	// Ежемесячный платёж по формуле
	const monthlyPayment = creditBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));

	// Общая сумма выплат
	const totalPayment = monthlyPayment * countMonths;

	// Округляем до двух знаков и возвращаем
	return Number(totalPayment.toFixed(2));
}