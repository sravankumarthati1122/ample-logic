import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(
      { positionClass: 'toast-bottom-right', // Position to bottom right
        timeOut: 3000, // Duration before the toast disappears
        closeButton: true, // Show close button
        progressBar: true } // Show progress bar}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
