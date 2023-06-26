export class Question {
  constructor(data) {
    this.category = data.category
    this.type = data.type
    this.difficulty = data.difficulty
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswers = data.incorrect_answers
    this.allAnswers = this.incorrectAnswers.join(this.correctAnswer)
    // this.answers = this.correctAnswer.join(this.incorrectAnswers)

    // this.randomAnswers = this.allAnswers.sort(func)
    // // this.randomNumber = this.answers.Math.floor(Math.random() * this.answers.length)
    // // this.randomQuestion = this.randomNumber[this.random]
    // function func(a, b) {
    //   return 0.5 - Math.random();
    // }
  }

  get RandomAnswer() {
    return this.answers.split(" ")

  }

  get AnswerTemplate() {
    return `
    <section class="row">
    <div class="col-6 bg-primary selectable" onclick="app.QuestionsController.checkAnswer('${this.correctAnswer}')">${this.correctAnswer}</div>
    <div class="col-6 bg-primary selectable" onclick="app.QuestionsController.checkAnswer('${this.incorrectAnswers}')">${this.incorrectAnswers}</div>
  </section>
    `
  }

  get QuestionTemplate() {
    return `
      <div class="col-12 bg-primary text-light text-center">

        <section class="row">
          <div class="col-12">${this.category}</div>
        </section>

        <section class="row">
          <div class="col-12 bg-dark">${this.question}</div>
        </section>

        <section class="row">
          <div class="col-6 bg-primary selectable" onclick="app.QuestionsController.checkAnswer('${this.correctAnswer}')">${this.correctAnswer}</div>
          <div class="col-6 bg-primary selectable" onclick="app.QuestionsController.checkAnswer('${this.incorrectAnswers}')">${this.incorrectAnswers}</div>
        </section>
    `

  }

}



// questionData = `
// {
//   "category": "Entertainment: Video Games",
//   "type": "boolean",
//   "difficulty": "easy",
//   "question": "The Mann Co. Store from Team Fortress 2 has the slogan &quot;We hire mercenaries and get in fights&quot;.",
//   "correct_answer": "False",
//   "incorrect_answers": [
//       "True"
//   ]
// }
// `