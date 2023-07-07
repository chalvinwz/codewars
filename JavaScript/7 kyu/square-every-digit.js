function squareDigits(num) {
	const digits = Array.from(String(num), Number)

	let squaredDigits = digits.map((digit) => {
		const squaredDigit = digit * digit

		return squaredDigit
	})

	let result = parseInt(squaredDigits.join(''))

	return result
}
