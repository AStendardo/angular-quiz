import { Component, OnInit, OnDestroy, input, output, signal } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';
import { TimeFormatPipe } from '../time-format-pipe';
import { NgClass } from '@angular/common';

@Component({
  selector: 'chrono',
  imports: [NgClass, TimeFormatPipe],
  templateUrl: './chrono.html',
  styleUrl: './chrono.css',
})
export class Chrono {
  timeLeft = signal(15);
  private timerSubscription!: Subscription;

  timeUp = output<void>();

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  public startTimer() {
    this.timeLeft.set(15);
    // interval(1000) emette un valore ogni 1000ms (1 secondo)
    this.timerSubscription = interval(1000).pipe(
      // Continua a emettere finché tempoRimanente è >= 0
      takeWhile(() => this.timeLeft() >= 0),
      tap(() => {
        if (this.timeLeft() > 0) {
          this.timeLeft.update(v => v - 1);
        } else {
          // Quando il tempo è scaduto (tempoRimanente è 0 o meno)
          // this.chiamaMetodo();
          // Importante: disiscriviti per fermare l'intervallo
          if (this.timerSubscription) {
            this.stopTimer();
            this.timeUp.emit();
          }
        }
      })
    ).subscribe();
  }

  public stopTimer() {
    this.timerSubscription.unsubscribe();
  }
}