import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { ReplaySubject, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from './user.model';

export interface AuthResponseData{
  status: string,
  token: string,
  data: {
    user: {
      "role": string,
      "_id": string,
      "name": string,
      "email": string,
      "__v": number
    }
  },
}

@Injectable({providedIn: 'root'})
export class AuthService{
  user = new ReplaySubject<User>(1)

  constructor(private http: HttpClient, private router: Router){}
  signup(signUpObj: any){
    return this.http
    .post<AuthResponseData>('http://127.0.0.1:3000/api/v1/users/signup',
    signUpObj)
    .pipe(tap(res=>{
      this.handleAuthentication(res.data.user.name, res.data.user.email, res.data.user._id, res.token)
    }))
  }

  login(loginObj: any){
    return this.http.post<AuthResponseData>('http://127.0.0.1:3000/api/v1/users/login',
    loginObj).pipe(tap(res=>{
      this.handleAuthentication(res.data.user.name, res.data.user.email, res.data.user._id, res.token)
    }))
  }

  logout(){
    this.user.next(undefined)
    this.router.navigate(['/'])
    localStorage.removeItem('user')
  }

  autoLogout(){

  }

  autoLogin(){
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if(!user){
      return
    }
    const loadedUser = new User(user.name, user.email, user.userId, user.token)
    if(loadedUser.token){
      this.user.next(loadedUser)
  }
  }

  private handleAuthentication(name: string, email: string, userId: string, token: string){
    const user = new User(name, email, userId, token);
    this.user.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }
}
