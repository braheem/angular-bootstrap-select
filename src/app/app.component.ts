import {AfterViewInit, OnInit, Component} from '@angular/core';
import {City} from './shared/bootstrap-select/examples/city-multiselect/city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  // an example string array for display on the city string multiselect
  private cityStringOptions: Array<String>;
  // preselected values for city string multiselect
  private myCitiesString: Array<String>;

  // an example City array for display on the city object multiselect
  private cityObjOptions: Array<City>;
  // preselected values for city object multiselect
  private myCitiesObj: Array<City>;

  ngOnInit() {
    this.cityStringOptions = ['Toronto', 'Waterloo', 'London'];
    this.cityObjOptions = MockData.mockCityOptions;
  }

  ngAfterViewInit() {
    // set the options to be preselected on a delay to test bootstrap-select
    // typically you would be getting these options from a subscription
    setTimeout(() => {
      this.myCitiesString = Array.of('Toronto', 'London');
      this.myCitiesObj = MockData.mockCitySelections;
    }, 250);
  }

}

export class MockData {

  static mockCityOptions: Array<City> = [
    { id: 0, name: 'Toronto', area: 100},
    { id: 1, name: 'Waterloo', area: 100},
    { id: 3, name: 'London', area: 100}
  ];

  static mockCitySelections: Array<City> = [
    { id: 0, name: 'Toronto', area: 100},
    { id: 3, name: 'London', area: 100}
  ];
}
