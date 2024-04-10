import { Component } from '@angular/core';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  regData = {

    name: '',
    email: '',
    nic:'',
    address: '',
    password:'',
    contact_number:'',
    dob:'',
    role : '',
    gender:''
    };
  
    constructor(private registrationService: RegisterService) { }
  
    register(): void {

      if (this.validateForm()) {
        // Call the registration service to register the user
        this.registrationService.registerUser(this.regData)
          .subscribe(response => {
            // Handle the response from the server
            console.log(response);
            alert('Registration successful');
            this.clear();
          },
          error => {
            // Handle the error response from the server
            console.log(error);
            alert('Already Registered!');
            
          }
  
          );
      }
    }

    clear(): void {
      this.regData = {
        name: '',
        nic: '',
        role:'',
        password: '',
        address: '',
        gender:'',
        contact_number:'',
        dob:'',
        email:''
      };
    }
    
    validateForm(): boolean {
      // Perform front-end validation
      if (
        this.regData.name.trim() === '' ||
        this.regData.nic.trim() === '' ||
        this.regData.gender.trim() === '' ||
        this.regData.password.trim() === '' ||
        this.regData.role.trim() === ''||
        this.regData.nic.trim() === ''||
        this.regData.email.trim() === ''||
        this.regData.contact_number.trim() === ''||
        this.regData.dob.trim() === ''
      ) {
        // Show an error message or perform any other desired actions
        alert('All fields are required');
        return false;
      }
      
  
      if (!this.validatePassword(this.regData.password)) {
        alert('Invalid password. It should contain at least one lowercase letter, one uppercase letter, one special character, one number, and be at least 8 characters long.  Example - @Example8');
        return false;
      }
  
      return true; // Form is valid
    }

    validatePassword(password: string): boolean {
      // Password validation logic
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return passwordRegex.test(password);
    }
}

