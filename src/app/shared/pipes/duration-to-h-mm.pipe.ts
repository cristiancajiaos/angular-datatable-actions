import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationToHMm'
})
export class DurationToHMmPipe implements PipeTransform {

  transform(duration: number): any {
    return `${Math.floor(duration / 60)}h ${duration % 60}min.`;
  }

}
