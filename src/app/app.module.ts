import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FabricComponent } from './fabric/fabric.component';
import { PatternComponent } from './pattern/pattern.component';

@NgModule({
  declarations: [
    AppComponent,
    FabricComponent,
    PatternComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
