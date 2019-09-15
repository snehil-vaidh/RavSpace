import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {MatNativeDateModule} from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserService } from './shared/user.service';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,MatStepperModule,FormlyBootstrapModule,
    AppRoutingModule, MatNativeDateModule,
    BrowserAnimationsModule,
    FormsModule ,ReactiveFormsModule ,HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }