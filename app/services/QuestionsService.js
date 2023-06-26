import { AppState } from "../AppState.js"
import { Question } from "../models/Question.js"
import { Pop } from "../utils/Pop.js"
import { questionsApi } from "./AxiosService.js"

class QuestionsService {
  async getQuestions() {
    const response = await questionsApi.get()
    console.log("data?", response.data)
    const arrayOfQuestions = response.data.results.map(q => new Question(q))
    console.log(arrayOfQuestions)
    AppState.questions = arrayOfQuestions
    console.log('questions in class form', AppState.questions)
  }

  checkAnswer(data) {
    // console.log('current question answer', AppState.currentQuestion.correctAnswer)
    // console.log('data', data)

    if (data == AppState.currentQuestion.correctAnswer) {
      console.log('right answer!')
      Pop.success('right answer!')
      AppState.emit('questions')
    }
    else {
      console.log('wrong')
      Pop.toast('Wrong!')
    }
  }
}

export const questionsService = new QuestionsService