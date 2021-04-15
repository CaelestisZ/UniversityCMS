import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  isLoadingS = false
  isLoadingL = false
  errorLogin: string = ""
  errorSignup: string = ""

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitSignup(form: NgForm) {
    this.isLoadingS = true
    let authObs = this.authService.signup(form.value)

    authObs.subscribe(res=>{
      this.isLoadingS = false
      this.router.navigate(['/notifications'])
    }, err=>{
      console.log(err)
      this.errorSignup = err.error.message;
      this.isLoadingS = false
    })
    form.reset()
  }

  onSubmitLogin(form: NgForm) {
    this.isLoadingL = true
    let authObs = this.authService.login(form.value)

    authObs.subscribe(res=>{
      this.isLoadingL = false
      this.router.navigate(['/notifications'])
    }, err=>{
      console.log(err)
      this.errorLogin = err.error.message;
      this.isLoadingL = false
    })
    form.reset()
  }

}
