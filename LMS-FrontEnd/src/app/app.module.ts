import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LmsHomeComponent } from './lms-home/lms-home.component';
import { RegisterComponent } from './register/register.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { LmsBooksComponent } from './lms-books/lms-books.component';
import { UpdateBooksComponent } from './update-books/update-books.component';
import { InsertBooksComponent } from './insert-books/insert-books.component';
import { DeleteBooksComponent } from './delete-books/delete-books.component';
import { LmsStudentComponent } from './lms-student/lms-student.component';
import { LmsAdminComponent } from './lms-admin/lms-admin.component';
import { LmsStaffComponent } from './lms-staff/lms-staff.component';
import { StudentNavbarComponent } from './student-navbar/student-navbar.component';
import { StaffNavbarComponent } from './staff-navbar/staff-navbar.component';
import { LmsUsersComponent } from './lms-users/lms-users.component';
import { LmsManageUsersComponent } from './lms-manage-users/lms-manage-users.component';

@NgModule({
  declarations: [
    AppComponent,
    LmsHomeComponent,
    RegisterComponent,
    AdminNavbarComponent,
    LmsBooksComponent,
    UpdateBooksComponent,
    InsertBooksComponent,
    DeleteBooksComponent,
    LmsStudentComponent,
    LmsAdminComponent,
    LmsStaffComponent,
    StudentNavbarComponent,
    StaffNavbarComponent,
    LmsUsersComponent,
    LmsManageUsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    NgxDatatableModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
