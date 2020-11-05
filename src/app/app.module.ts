import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArcEnCielDirective } from './components/arc-en-ciel.directive';
import { ArcEnCielComponent } from './components/arc-en-ciel/arc-en-ciel.component';


@NgModule({
  declarations: [
    AppComponent,
    ArcEnCielDirective,
    ArcEnCielComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
