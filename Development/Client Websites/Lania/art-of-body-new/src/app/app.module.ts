import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { TawkChatComponent } from './TawkChat/tawk-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TawkChatComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: false }),
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
