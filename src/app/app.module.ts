import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CompComponent } from './comp/comp.component';
import {PrebootModule } from 'preboot';

@NgModule({
  declarations: [
    AppComponent,
    CompComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule,
    PrebootModule.withConfig({appRoot:'app-root',eventSelectors:[
      {selector:'button',events:['click']}
    ]})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
