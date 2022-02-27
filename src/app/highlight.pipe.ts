import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer){}

  transform(value: string, cityCode: string): any {

    if(cityCode == 'NY' || cityCode == 'CL')
    
    return this.sanitizer.bypassSecurityTrustHtml ('<div style= "background-color:blue">' + cityCode + '</b>');

    else 
    {
      return this.sanitizer.bypassSecurityTrustHtml ('<div style= "background-color: green">' + cityCode + '</b>');

    }

    
  }

}
