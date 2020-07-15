import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'consoleLog'
})
export class ConsoleLogPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log('--- consoleLog PIPE:', value);
    return null;
  }

}
