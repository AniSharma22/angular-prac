import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter, RouterLink, RouterOutlet, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { AppService } from './services/app-service.service';
import { ProductComponent } from './components/dashboard/product/product.component';
import { routes } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditFormComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterLink,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(),
    AppService,
    provideRouter(routes, withComponentInputBinding()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
