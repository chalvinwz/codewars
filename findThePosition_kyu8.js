function position(letter) {
	const alphabets = [...'abcdefghijklmnopqrstuvwxyz']

	const position = alphabets.indexOf(letter) + 1

	return `Position of alphabet: ${position}`
}

position('z')
