import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Operands } from './model/operands';
import { OperationListComponent } from './operation-list/operation-list.component';

@NgModule({
  declarations: [
    AppComponent,
    OperationListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
