import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { QuotesComponent } from './quotes/quotes.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    QuotesComponent,
    GoalDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
