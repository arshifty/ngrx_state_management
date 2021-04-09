import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoComponent } from '../app/ToDo/Components/to-do.component';
import { CustomerDataComponent } from '../app/ToDo/customer-data/customer-data.component';
import { SchoolViewComponent } from './college/school-view/school-view.component';
import { TeacherDataComponent } from './college/teacher-data/teacher-data.component';



const routes: Routes = [
  { 
    path: '', redirectTo: 'customerdata', pathMatch: 'full' 
  },
  { 
    path: 'userdata', 
    component: ToDoComponent 
  },
  { 
    path: 'customerdata', 
    component: CustomerDataComponent 
  },
  { 
    path: 'teacher', 
    component: TeacherDataComponent 
  },
  {
    path: 'school', 
    component: SchoolViewComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
