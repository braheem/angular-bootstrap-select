import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BootstrapSelectDirective } from './bootstrap-select/bootstrap-select.directive';
import { CityMultiselectStringComponent } from './bootstrap-select/examples/city-multiselect/city-multiselect-string.component';
import { CityMultiselectObjectComponent } from './bootstrap-select/examples/city-multiselect/city-multiselect-object.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    BootstrapSelectDirective,
    CityMultiselectStringComponent,
    CityMultiselectObjectComponent
  ],
  exports: [
    BootstrapSelectDirective,
    CityMultiselectStringComponent,
    CityMultiselectObjectComponent
  ]
})
export class SharedModule { }
