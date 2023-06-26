export class Answer {
  constructor(data) {
    this.correctAnswer = data.correct_answer
    this.incorrectAnswers = data.incorrect_answers
  }

  get AnswerTemplate() {
    return `
  <section class="row">
  <div class="col-6 bg-primary">${this.correctAnswer}</div>
  <div class="col-6 bg-primary">${this.incorrectAnswers}</div>
</section>
  `
  }
}