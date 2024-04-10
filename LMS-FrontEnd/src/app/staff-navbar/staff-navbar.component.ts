import { Component } from '@angular/core';
import { LmsHomeService } from '../lms-home/lms-home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-navbar',
  templateUrl: './staff-navbar.component.html',
  styleUrls: ['./staff-navbar.component.css']
})
export class StaffNavbarComponent {


  userData: any;


  constructor(private HomeService : LmsHomeService, private router: Router) { }

  
  ngOnInit(): void {
    this.loadUserProfile();
}

loadUserProfile(): void {
  this.HomeService .getUserProfile().subscribe(
    (response: any) => {
      this.userData = { ...response };
    },
    (error: any) => {
      console.log('Error retrieving user profile:', error);
      console.log('Error status:', error.status);
      console.log('Error message:', error.message);
      // Handle the error appropriately
    }
  );
}
  

  onLogout() {
    this.HomeService .logout();
    this.router.navigate(['/']);
  }
}
