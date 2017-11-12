import { Component, OnInit } from '@angular/core';
import { BaseBootstrapSelect } from '../../base-bootstrap-select';

/**
 * Example of a bootstrap-select component using type string for option values
 */
@Component({
  selector: 'city-multiselect-string',
  templateUrl: './city-multiselect-string.component.html',
})
export class CityMultiselectStringComponent extends BaseBootstrapSelect {
}
