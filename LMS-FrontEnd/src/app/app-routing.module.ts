import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LmsHomeComponent } from './lms-home/lms-home.component';
import { LmsAdminComponent } from './lms-admin/lms-admin.component';
import { AuthGurdService } from './auth-gurd.service';
import { RouterResolverService } from './router-resolver.service';
import { LmsStudentComponent } from './lms-student/lms-student.component';
import { LmsStaffComponent } from './lms-staff/lms-staff.component';
import { LmsBooksComponent } from './lms-books/lms-books.component';
import { InsertBooksComponent } from './insert-books/insert-books.component';
import { UpdateBooksComponent } from './update-books/update-books.component';
import { DeleteBooksComponent } from './delete-books/delete-books.component';
import { LmsUsersComponent } from './lms-users/lms-users.component';
import { LmsManageUsersComponent } from './lms-manage-users/lms-manage-users.component';

const routes: Routes = [

  {path:"",component:LmsHomeComponent},
  {path:"lms-admin",component:LmsAdminComponent, canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN'] },resolve: { userRole: RouterResolverService }},
  {path:"lms-student",component:LmsStudentComponent, canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN','STUDENT','STAFF'] },resolve: { userRole: RouterResolverService }},
  {path:"lms-staff",component:LmsStaffComponent, canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN','STAFF'] },resolve: { userRole: RouterResolverService }},
  {path:"lms-books",component:LmsBooksComponent, canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN','STAFF','STUDENT'] },resolve: { userRole: RouterResolverService }},
  {path:"insert-books",component:InsertBooksComponent, canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN','STAFF'] },resolve: { userRole: RouterResolverService }},
  {path:"update-books",component:UpdateBooksComponent, canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN','STAFF'] },resolve: { userRole: RouterResolverService }},
  {path:"delete-books",component:DeleteBooksComponent, canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN'] },resolve: { userRole: RouterResolverService }},
  {path:"lms-users",component:LmsUsersComponent, canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN','STAFF'] },resolve: { userRole: RouterResolverService }},
  {path:"lms-manage-users",component:LmsManageUsersComponent, canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN'] },resolve: { userRole: RouterResolverService }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
