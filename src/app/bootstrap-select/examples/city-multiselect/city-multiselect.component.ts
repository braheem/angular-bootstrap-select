import { Component, OnInit } from '@angular/core';
import { BaseBootstrapSelect } from '../../base-bootstrap-select';

/** For now, this subclass is only unique in its template **/
@Component({
  selector: 'city-multiselect',
  templateUrl: './city-multiselect.component.html',
  styleUrls: ['./city-multiselect.component.css']
})
export class CityMultiselectComponent extends BaseBootstrapSelect {
}
