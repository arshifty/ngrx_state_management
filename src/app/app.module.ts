import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ToDoComponent } from './ToDo/Components/to-do.component';
import { CustomerDataComponent } from './ToDo/customer-data/customer-data.component';
import { ToDoReducer } from './ToDo/services/todo.reducer';
import { ToDoEffects } from './ToDo/services/todo.effects';
import { TeacherDataComponent } from './college/teacher-data/teacher-data.component';

import {TeacherReducer} from './college/services/teacher.reducer'
import {TeacherEffects} from './college/services/teacher.effects';
import { SchoolViewComponent } from './college/school-view/school-view.component'

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    CustomerDataComponent,
    TeacherDataComponent,
    SchoolViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // StoreModule.forRoot({ todoss: ToDoReducer }),
    // EffectsModule.forRoot([ToDoEffects]),

     StoreModule.forRoot({ teachers: TeacherReducer , todoss: ToDoReducer }),   
     EffectsModule.forRoot([TeacherEffects , ToDoEffects])


    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
