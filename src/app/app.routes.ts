import { Routes } from '@angular/router';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add', component: EditFormComponent },
  { path: 'update', component: EditFormComponent }, 
];
  