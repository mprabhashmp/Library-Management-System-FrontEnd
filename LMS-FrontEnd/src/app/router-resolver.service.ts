import { Injectable } from '@angular/core';
import { LmsHomeService } from './lms-home/lms-home.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterResolverService {

  constructor(private authservice: LmsHomeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    //  fetch the user's role from the backend
    return this.authservice.getUserRole();
  }

}