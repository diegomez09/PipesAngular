import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private _domS:DomSanitizer){}

  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    return this._domS.bypassSecurityTrustResourceUrl(value);    
  }

}
