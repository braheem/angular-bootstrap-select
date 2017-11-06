import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BootstrapSelectDirective } from './bootstrap-select/bootstrap-select.directive';
import { CityMultiselectComponent } from './bootstrap-select/examples/city-multiselect/city-multiselect.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    BootstrapSelectDirective,
    CityMultiselectComponent
  ],
  exports: [
    BootstrapSelectDirective,
    CityMultiselectComponent
  ]
})
export class SharedModule { }
