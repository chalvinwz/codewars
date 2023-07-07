function position(letter: string): string {
	const alphabets = 'abcdefghijklmnopqrstuvwxyz'

	const letterPosition = alphabets.indexOf(letter) + 1

	const result = `Position of alphabet: ${letterPosition}`

	return result
}
