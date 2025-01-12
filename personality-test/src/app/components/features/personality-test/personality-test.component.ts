import { Component, OnInit } from '@angular/core';
import { questions } from 'src/app/models/questions.model';
import { results } from 'src/app/models/results.model';

@Component({
  selector: 'app-personality-test',
  templateUrl: './personality-test.component.html',
  styleUrls: ['./personality-test.component.scss']
})
export class PersonalityTestComponent implements OnInit {

  questions = questions;
  personalityTraits: { [key: string]: number } = {
    empathetic: 0,
    analytical: 0,
    adventurous: 0,
    creative: 0,
  };
  displayResult: boolean = false;
  // Track current question index and responses
  currentQuestionIndex = 0;
  selectedAnswers: number[] = [];
  traitScores: { [trait: string]: number } = {};
  resultTitle = results[0].title;
  resultDesc = results[0].description;
  constructor() {
    // Initialize `selectedAnswers` with `null` for each question
    this.selectedAnswers = Array(this.questions.length).fill(null);
  }

  ngOnInit(): void {
  }

  // Getter for current question
  get currentQuestion() {
    return questions[this.currentQuestionIndex];
  }

  // Handle option selection
  selectOption(trait: string, optionIndex: number) {
    // Save the selected answer index
    this.selectedAnswers[this.currentQuestionIndex] = optionIndex;

    // Increment the corresponding trait score
    this.personalityTraits[trait]++;

    // Move to the next question automatically (if not the last question)
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  // Navigate to the next question
  nextQuestion() {
    if (this.currentQuestionIndex < questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  // Navigate to the previous question
  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  submitQuiz() {
    const dominantTrait = Object.entries(this.personalityTraits).reduce(
      (maxTrait, [trait, value]) => (value > maxTrait.value ? { trait, value } : maxTrait),
      { trait: '', value: -Infinity }
    );
    this.displayResult = true;
    this.showResult(dominantTrait.trait);
  }

  showResult(dominantTrait) {
    console.log(results[0].title)
    switch (dominantTrait) {
      case 'empathetic':
        this.resultTitle = results[0].title;
        this.resultDesc = results[0].description;
        break;
      case 'creative':
        this.resultTitle = results[1].title;
        this.resultDesc = results[1].description;
        break;
      case 'adventurous':
        this.resultTitle = results[2].title;
        this.resultDesc = results[2].description;
        break;
      case 'analytical':
        this.resultTitle = results[3].title;
        this.resultDesc = results[3].description;
        break;
      default:
        this.resultTitle = results[0].title;
        this.resultDesc = results[0].description;
        break;
    }
  }

}
