import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // an example string array for display on the city multiselect
  private options = ['Toronto', 'Waterloo', 'London'];
}
