import { AppState } from "../AppState.js"
import { questionsService } from "../services/QuestionsService.js"
import { setHTML } from "../utils/Writer.js"

function _drawAnswers() {
  let answers = AppState.answers
  let template = ''
  let randomNumber = Math.floor(Math.random() * answers.length)

}

function _drawQuestions() {
  let questions = AppState.questions
  let template = ''
  let randomNumber = Math.floor(Math.random() * questions.length)
  console.log(randomNumber)
  let randomQuestion = questions[randomNumber]
  let randomHtml = template + randomQuestion.QuestionTemplate
  setHTML('questions', randomHtml)
  AppState.currentQuestion = randomQuestion
  console.log("current question", AppState.currentQuestion)
}

export class QuestionsController {
  constructor() {
    console.log('hello from questions Controller')

    AppState.on('questions', _drawQuestions)
    this.getQuestions()
  }

  checkAnswer(data) {
    console.log('data being passed', data)
    questionsService.checkAnswer(data)
  }


  async getQuestions() {
    await questionsService.getQuestions()
  }
}

