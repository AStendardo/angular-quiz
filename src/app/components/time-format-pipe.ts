import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(seconds: number): string {
    if (isNaN(seconds) || seconds < 0) {
      return '0:00';
    }

    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;

    // Aggiunge lo zero se i secondi sono < 10
    const secondsFormattatted = sec < 10 ? `0${sec}` : `${sec}`;

    return `${min}:${secondsFormattatted}`;
  }
}