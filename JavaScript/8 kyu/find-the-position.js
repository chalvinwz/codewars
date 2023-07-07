function position(letter) {
	const alphabets = 'abcdefghijklmnopqrstuvwxyz'

	const letterPosition = alphabets.indexOf(letter) + 1

	return `Position of alphabet: ${letterPosition}`
}
