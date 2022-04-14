import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PbHeaderComponent } from './components/pb-header/pb-header.component';
import { PbSidebarComponent } from './components/pb-sidebar/pb-sidebar.component';
import { PbHomeComponent } from './components/pb-home/pb-home.component';
import { PbContactDetailsComponent } from './components/pb-contact-details/pb-contact-details.component';
import { FullnamePipe } from './pipes/fullname.pipe';
import { AgePipe } from './pipes/age.pipe';
import { PbContactListComponent } from './components/pb-contact-list/pb-contact-list.component';
import { RouterModule, Routes } from '@angular/router';
import { PbAddContactComponent } from './components/pb-add-contact/pb-add-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PbEditContactComponent } from './components/pb-edit-contact/pb-edit-contact.component';

const routes: Routes = [
  {
    path:       '',
    pathMatch:  'full',   // Redirect to default if entire path is blank
    component:  PbHomeComponent
  }, {
    path:       'home',
    component:  PbHomeComponent
  }, {
    path:       'contact-list',
    component:  PbContactListComponent
  }, {
    path:       'contact-details/:id', // "id" is an input param
    component:  PbContactDetailsComponent
  }, {
    path:       'add-contact',
    component:  PbAddContactComponent
  }, {
    path:       'edit-contact/:id',
    component:  PbEditContactComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PbHeaderComponent,
    PbSidebarComponent,
    PbHomeComponent,
    PbContactDetailsComponent,
    FullnamePipe,
    AgePipe,
    PbContactListComponent,
    PbAddContactComponent,
    PbEditContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
