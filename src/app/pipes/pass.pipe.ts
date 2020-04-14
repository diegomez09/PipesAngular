import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pass'
})
export class PassPipe implements PipeTransform {

  transform(nombre: string, bandera:boolean): string {
    let texto:string = nombre;
    if(bandera){
      //console.log(true,'pipe');
      let nombre:string = '';
      let largo:number =texto.length;      
      for(let i = 0; i < largo; i++){
        nombre = nombre + '*';
      }
      return nombre;

    }else{
      //console.log(false,'pipe');
      return nombre;
    }    
  }

}
