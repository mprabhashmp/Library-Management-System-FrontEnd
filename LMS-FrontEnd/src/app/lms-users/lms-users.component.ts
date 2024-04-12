import { Component } from '@angular/core';
import { LmsUsersService } from './lms-users.service';

@Component({
  selector: 'app-lms-users',
  templateUrl: './lms-users.component.html',
  styleUrls: ['./lms-users.component.css']
})
export class LmsUsersComponent {


  users: any[] = [];
  userId: any;

  constructor(private userService: LmsUsersService) { }

  ngOnInit(): void {
    this.fetchAllUsers();
  }

  fetchAllUsers(): void {
    this.userService.getAllUsers().subscribe(
      (data: any) => {
        this.users = data;
      },
      (error: any) => {
        console.error('Error fetching users:', error);
        // Handle error as needed
      }
    );
  }

  // deleteUser(userId: any): void {
  //   if (confirm('Are you sure you want to delete this user?')) {
  //     this.userService.deleteUser(userId).subscribe(
  //       () => {
  //         // Filter out the deleted user from the list
  //         this.users = this.users.filter(user => user.id !== userId);
  //         alert('User deleted successfully');
  //       },
  //       (error: any) => {
  //         console.error('Error deleting user:', error);
  //         // Handle error as needed
  //       }
  //     );
  //   }
  //}
}
