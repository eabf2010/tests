import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WizardComponent } from './components/wizard/wizard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RelojComponent } from './components/reloj/reloj.component';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    RelojComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
