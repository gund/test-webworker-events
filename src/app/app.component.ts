import { Component } from '@angular/core';
import { IMultiSelectOption, IMultiSelectSettings } from '@gund/angular-dropdown-multiselect';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  options: IMultiSelectOption[] = [
    { id: 1, name: 'Option #1' },
    { id: 2, name: 'Option #2' },
    { id: 3, name: 'Option #3' },
    { id: 4, name: 'Option #4' },
    { id: 5, name: 'Option #5' },
  ];

  settings: IMultiSelectSettings = {
    closeOnClickOutside: false,
    selectionLimit: 1,
    autoUnselect: true,
    closeOnSelect: true,
    searchRenderLimit: 100,
    searchRenderAfter: 1,
    searchMaxLimit: 500,
    searchMaxRenderedItems: 10,
  };

  clicked = false;

  clickMe() {
    this.clicked = true;
    setTimeout(() => this.clicked = false, 1000);
  }

}
