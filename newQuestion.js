const rl = require('readline')

let newQuestion = {}

let options = ['A', 'B', 'C', 'D']
function* gen () {
	for(let i = 0; i < options.length; i++) {
		yield i
	}
}

let generator = gen()
let index = generator.next().value

const readline = rl.createInterface({
	input: process.stdin,
	output: process.stdout,
})


function askQuestionText () {
	readline.question('Savol matnini kiriting: ', data => {
		if(!data) return askQuestionText()
		newQuestion['text'] = data
		return askQuestionVariants(index)
	})
}

function askQuestionVariants (index) {
	readline.question(options[index] + ') ', data => {
		if(!data) return askQuestionVariants(index)
		newQuestion.options = newQuestion.options || []
		newQuestion.options.push({ [options[index]]: data })
		let newIndex = generator.next().value
		if(!newIndex) {
			return aksQuestionAnswer()
		} else {
			return askQuestionVariants(newIndex)
		}
	})
}

function aksQuestionAnswer () {
	readline.question('To\'g\'ri javobni kiriting: ', data => {
		if(!data || !options.includes(data)) return aksQuestionAnswer()
		newQuestion.answer = data
		console.log('Yangi savol yasaldi: ', newQuestion)
		return readline.close()
	})
}

askQuestionText()

