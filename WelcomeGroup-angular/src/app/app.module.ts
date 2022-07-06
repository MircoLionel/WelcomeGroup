import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GeneradoCliComponent } from './PruebaComponente/generado-cli/generado-cli.component';
import { manual } from './PruebaComponente/manual/componente';

@NgModule({
  declarations: [
    AppComponent,
    manual
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
