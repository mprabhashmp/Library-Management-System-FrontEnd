import { Component } from '@angular/core';
import { LmsHomeService } from './lms-home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lms-home',
  templateUrl: './lms-home.component.html',
  styleUrls: ['./lms-home.component.css']

})

export class LmsHomeComponent {

  username = '';
  password='';
  error='';
  
    constructor(private HomeService:LmsHomeService, private router:Router) { }
  
    onSubmit() {
      this.HomeService.login(this.username, this.password)
        .subscribe(
          (response: { token: any; }) => {
            const token = response.token;
          localStorage.setItem('token', token);
            
            // Getting the user role
            this.HomeService.getUserRole().subscribe(
              (role: any) => {
  
               // Navigate to specific dashboard based on the role
                switch (role) {
                  case 'ADMIN':
                    this.router.navigate(['/lms-admin']);
                    break;
                  case 'STUDENT':
                    this.router.navigate(['/lms-student']);
                    break;
                  case 'STAFF':
                    this.router.navigate(['/lms-staff']);
                    break;
                  default:
                    this.router.navigate(['/']);
                    break;
                }
              }
            );
          },
          (error) => {
            if (error.status === 401) {
              this.error = 'Please enter valid credentials.';
            } else {
              this.error = 'Invalid Index or password.';
            }
          }
        );
    }
  
  
    onLogout() {
      this.HomeService.logout();
      this.router.navigate(['/lms-home']);
    }
  
  }

