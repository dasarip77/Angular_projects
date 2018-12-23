import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RestCallComponent } from './rest-call/rest-call.component';
import { HttpClientModule } from '@angular/common/http';
import { RestExService } from './rest-ex.service';
import { CommonModule } from '@angular/common';
// import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    RestCallComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [RestExService],
  bootstrap: [AppComponent]
})
export class AppModule { }
