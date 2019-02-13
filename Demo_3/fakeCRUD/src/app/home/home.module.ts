import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    BrowserModule
  ],
  bootstrap: [IndexComponent]
})
export class HomeModule { }
