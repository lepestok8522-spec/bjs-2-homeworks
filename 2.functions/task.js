function getArrayParams(...arr) {
	// Проверка на пустой массив
	if (arr.length === 0) {
		return {
			min: 0,
			max: 0,
			avg: 0
		};
	}

	const min = Math.min(...arr);
	const max = Math.max(...arr);
	const sum = arr.reduce((acc, current) => acc + current, 0);
	const avg = Number((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

// Насадка 1: Сумма элементов
function summElementsWorker(...arr) {
	if (arr.length === 0) return 0;

	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

// Насадка 2: Разница max и min
function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) return 0;
	const max = Math.max(...arr);
	const min = Math.min(...arr);
	return max - min;
}

// Насадка 3: Разница сумм чётных и нечётных
function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) return 0;

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}

	return sumEvenElement - sumOddElement;
}

// Насадка 4: Среднее чётных элементов
function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) return 0;

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}

	if (countEvenElement === 0) return 0;
	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	if (arrOfArr.length === 0) return 0;

	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}

	return maxWorkerResult;
}

console.log('=== Задача 1 ===');
console.log(getArrayParams(-99, 99, 10)); // { min: -99, max: 99, avg: 3.33 }
console.log(getArrayParams(1, 2, 3, -100, 10)); // { min: -100, max: 10, avg: -16.80 }
console.log(getArrayParams(5)); // { min: 5, max: 5, avg: 5 }

console.log('=== Задача 2 ===');
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 10
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 53
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 5

console.log('=== Задача 3 ===');
const arr = [
	[10, 10, 11, 20, 10],
	[67, 10, 2, 39, 88],
	[72, 75, 51, 87, 43],
	[30, 41, 55, 96, 62]
];
console.log(makeWork(arr, summElementsWorker)); // 328
console.log(makeWork(arr, differenceMaxMinWorker)); // 86
console.log(makeWork(arr, differenceEvenOddWorker)); // 92
console.log(makeWork(arr, averageEvenElementsWorker)); // 72