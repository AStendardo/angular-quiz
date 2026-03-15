import { Component, inject, computed, input, ViewChild, HostListener, numberAttribute, output, signal } from '@angular/core';
import { Forward } from '../forward/forward';
import { Service } from '../../services/service';
import { Chrono } from "../chrono/chrono";

@Component({
  selector: 'question',
  imports: [Chrono, Forward],
  templateUrl: './question.html',
  styleUrl: './question.css',
})

export class Question {
width = signal(window.innerWidth);
  height = signal(window.innerHeight);

  // Ascoltiamo l'evento di resize della finestra
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width.set(window.innerWidth);
    this.height.set(window.innerHeight);
  }


  service = inject(Service);

  idx = input(0, {
    transform: numberAttribute
  });

  nextIdx = computed(() => this.idx() + 1);

  getNextRoute() {
    if (this.nextIdx() <= 9) {
      return '/question/' + this.nextIdx();
    }

    return '/results';
  }

  getQuestion() {
    return this.service.getCurrentTrivia(this.idx())?.question;
  }

  getAnswers() {
    return this.service.getCurrentTrivia(this.idx())?.answers;
  }

  getCorrectAnswer() {
    return this.service.getCurrentTrivia(this.idx())?.correctAnswer;
  }

  selectedAnswer: number | null = null;
  userAnswered = output<void>();

  @ViewChild('chrono') chrono!: Chrono;

  checkAnswer(clickedAnswer: number): void {
    // Memorizza la risposta selezionata
    if (this.selectedAnswer === null) {
      this.userAnswered.emit();
      this.stopTimer();
      this.selectedAnswer = clickedAnswer;
      this.service.setCurrentTriviaUserAnswer(this.idx(), this.selectedAnswer);
    }
  }

  showCorrectAnswer() {
    this.checkAnswer(-1);
  }

  questionChanged() {
    this.selectedAnswer = null;
    this.stopTimer();
    this.restartTimer();
  }

  restartTimer() {
    if (this.chrono) {
      this.chrono.startTimer();
    }
  }

  stopTimer() {
    if (this.chrono) {
      this.chrono.stopTimer();
    }
  }
}