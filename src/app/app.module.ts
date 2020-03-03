import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvgHeaderComponent } from './components/avg-header/avg-header.component';
import { AvgFooterComponent } from './components/avg-footer/avg-footer.component';
import { UserUpdateFormComponent } from './components/user-update-form/user-update-form.component';
import { UserCreationFormComponent } from './components/user-creation-form/user-creation-form.component';
import { AvgHomeComponent } from './components/avg-home/avg-home.component';
import { AvgPortalContentComponent } from './components/avg-portal-content/avg-portal-content.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AvgHeaderComponent,
    AvgFooterComponent,
    UserUpdateFormComponent,
    UserCreationFormComponent,
    AvgHomeComponent,
    AvgPortalContentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
