import { Component, inject } from '@angular/core';
import { Forward } from '../forward/forward';
import { Service } from '../../services/service';

@Component({
  selector: 'app-results',
  imports: [Forward],
  templateUrl: './results.html',
  styleUrl: './results.css',
})
export class Results {
  service = inject(Service);

  correctAnswers: number = 0;

  getResult() {
    const currentTrivia = this.service.getCurrentTrivias();
    this.correctAnswers = 0;

    if (currentTrivia != null) {
      for (let i = 0; i < currentTrivia.length; i++) {
        if (currentTrivia[i].userAnswer == currentTrivia[i].correctAnswer) {
          this.correctAnswers++;
        }
      }
    }

    return this.correctAnswers + "/10";
  }

  getUserAnswer(idx: number) {
    if (this.service.getCurrentTrivia(idx)?.userAnswer != -1) {
      const userAnswer = this.service.getCurrentTrivia(idx)?.userAnswer;

      if (userAnswer != null && userAnswer != -1) {
        return this.service.getCurrentTrivia(idx)?.answers[userAnswer];
      }
    }

    return "Senza risposta";
  }
}
