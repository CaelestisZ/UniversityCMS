import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

interface events{
  status: Number,
  data:{
    events: [];
  };
};

interface event {
  title: String,
  description: String,
  date: string
};

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {

  announcementList:event[] = [];


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.fetchAnnouncements();
  }

  async fetchAnnouncements() {
    await this.http.get<events>('http://127.0.0.1:3000/api/v1/events', {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
    }).toPromise()
    .then((res: events) => {
      this.announcementList.push(...res.data.events);
    })
    console.log(this.announcementList);
    this.announcementList.forEach(announcement => {
      console.log(announcement);
    });
  }
  

}
