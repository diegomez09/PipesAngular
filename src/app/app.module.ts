import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import  localES  from '@angular/common/locales/es-MX';
import  localPOR  from '@angular/common/locales/fr';
import  localEN  from '@angular/common/locales/en';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { PassPipe } from './pipes/pass.pipe';

registerLocaleData(localEN,'en');
registerLocaleData(localPOR,'pt');
registerLocaleData(localES,'es');

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    PassPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es',      
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
