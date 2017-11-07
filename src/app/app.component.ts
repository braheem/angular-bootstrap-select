import {AfterViewInit, OnInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  // an example string array for display on the city multiselect
  private cityOptions: Array<String>;
  // preselected values for city multiselect
  private myCities: Array<String>;

  ngOnInit() {
    this.cityOptions = ['Toronto', 'Waterloo', 'London'];
  }

  ngAfterViewInit() {
    //set the options to be preselected on a delay to test bootstrap-select
    setTimeout(() => {
      this.myCities = Array.of('Toronto', 'London');
    }, 250);
  }
}
