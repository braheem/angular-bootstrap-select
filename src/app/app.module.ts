import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BootstrapSelectDirective } from './bootstrap-select/bootstrap-select.directive';
import { CityMultiselectComponent } from './bootstrap-select/examples/city-multiselect/city-multiselect.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapSelectDirective,
    CityMultiselectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
