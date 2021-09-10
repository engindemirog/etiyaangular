import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(wordKey: string, language: string): string {

    if(language ==="tr"){
      return "aradınız";
    }else{
      return "you searched"
    }
    
  }

}
