import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { DurationToHMmPipe } from './shared/pipes/duration-to-h-mm.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DurationToHMmPipe
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
