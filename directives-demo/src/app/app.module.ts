import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgforofDemoComponent } from './components/ngforof-demo/ngforof-demo.component';
import { NgswitchDemoComponent } from './components/ngswitch-demo/ngswitch-demo.component';
import { CustomDirectiveDemoComponent } from './components/custom-directive-demo/custom-directive-demo.component';
import { BoxDirective } from './directives/box.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgforofDemoComponent,
    NgswitchDemoComponent,
    CustomDirectiveDemoComponent,
    BoxDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
