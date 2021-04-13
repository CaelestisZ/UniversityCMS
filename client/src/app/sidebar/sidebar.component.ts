import { Component, OnInit } from '@angular/core';
import { AuthService } from './../landing-page/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout () {
    this.authService.logout();
  }

}
