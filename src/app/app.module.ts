import { NgModule } from '@angular/core';
import { WorkerAppModule } from '@angular/platform-webworker';
import { MultiselectDropdownModule } from '@gund/angular-dropdown-multiselect';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    WorkerAppModule,
    MultiselectDropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
