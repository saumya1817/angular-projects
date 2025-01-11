import { Component, OnInit } from '@angular/core';
import { questions } from 'src/app/models/questions.model';

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

  // Track current question index and responses
  currentQuestionIndex = 0;
  traitScores: { [trait: string]: number } = {};
  constructor() { }

  ngOnInit(): void {
  }

  // Getter for current question
  get currentQuestion() {
    return questions[this.currentQuestionIndex];
  }

  // Handle option selection
  selectOption(trait: string) {
    // Update trait score
    if (!this.traitScores[trait]) {
      this.traitScores[trait] = 0;
    }
    this.traitScores[trait]++;

    // Move to next question if not the last one
    if (this.currentQuestionIndex < questions.length - 1) {
      this.nextQuestion();
    } else {
      console.log('Test completed! Your traits:', this.traitScores);
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
    console.log(this.personalityTraits)
    // Display the dominant trait
    const dominantTrait = Object.keys(this.personalityTraits).reduce((a, b) =>
      this.personalityTraits[a] > this.personalityTraits[b] ? a : b
    );
    alert(`Your dominant personality trait is: ${dominantTrait}`);
  }

}
