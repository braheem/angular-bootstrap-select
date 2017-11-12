import { Component } from '@angular/core';
import { BaseBootstrapSelect } from '../../base-bootstrap-select';
import { City } from './city';

/**
 * Example of a bootstrap-select component using Object type for option values
 */
@Component({
  selector: 'city-multiselect-object',
  templateUrl: './city-multiselect-object.component.html',
})
export class CityMultiselectObjectComponent extends BaseBootstrapSelect {

  // boxing of options (see base class), allows us to define the type in this component
  public get cities(): Array<City> {
    return this.options as Array<City>;
  }
  public set cities(val: Array<City>) {
    this.options = val;
  }

  // boxing of selected options (see base class)
  public get selectedCities(): Array<City> {
    return this.mySelections as Array<City>;
  }
  public set selectedCities(val: Array<City>) {
    this.mySelections = val;
  }

  /**
   * method to compare City objects for use in the compareWith directive
   * In our case, two cities are equal if their id's are equal
   */
  compareCities(c1: City, c2: City): boolean {
    return c1 && c2 ? c1.id === c2.id : false;
  }

}
