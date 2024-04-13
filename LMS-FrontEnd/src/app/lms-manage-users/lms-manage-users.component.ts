import { Component } from '@angular/core';
import { ManageUsersService } from './manage-users.service';

@Component({
  selector: 'app-lms-manage-users',
  templateUrl: './lms-manage-users.component.html',
  styleUrls: ['./lms-manage-users.component.css']
})
export class LmsManageUsersComponent {
  users: any[] = [];
  id: any;

  constructor(private userService: ManageUsersService) { }

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

  deleteUser(id: any): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe(
        () => {
          // Filter out the deleted user from the list
          this.users = this.users.filter(user => user.id !== id);
          alert('User deleted successfully');
        },
        (error: any) => {
          console.error('Error deleting user:', error);
          // Handle error as needed
        }
      );
    }
  }
}
