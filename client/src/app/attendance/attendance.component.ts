import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Res {
  status: String,
  count: Number
};

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  userAttendance = ['UE18CS351', 'UE18CS352', 'UE18CS353', 'UE18CS338', 'UE18CS348', 'UE18CS354', 'UE18CS355'];
  a1 = 0;
  a2 = 0;
  a3 = 0;
  a4 = 0;
  a5 = 0;
  a6 = 0;
  a7 = 0;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAttendanceDetails();
  }

  async fetchAttendanceDetails() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(user.userId);
      await this.http.get<Res>('http://127.0.0.1:3000/api/v1/attendance/'+user.userId+'/'+this.userAttendance[0], {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
      }).toPromise()
      .then((res:Res) =>{
        this.a1 = Math.round(res.count.valueOf());
      })

      await this.http.get<Res>('http://127.0.0.1:3000/api/v1/attendance/'+user.userId+'/'+this.userAttendance[1], {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
      }).toPromise()
      .then((res:Res) =>{
        this.a2 = Math.round(res.count.valueOf());
      })

      await this.http.get<Res>('http://127.0.0.1:3000/api/v1/attendance/'+user.userId+'/'+this.userAttendance[2], {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
      }).toPromise()
      .then((res:Res) =>{
        this.a3 = Math.round(res.count.valueOf());
      })

      await this.http.get<Res>('http://127.0.0.1:3000/api/v1/attendance/'+user.userId+'/'+this.userAttendance[3], {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
      }).toPromise()
      .then((res:Res) =>{
        this.a4 = Math.round(res.count.valueOf());
      })

      await this.http.get<Res>('http://127.0.0.1:3000/api/v1/attendance/'+user.userId+'/'+this.userAttendance[4], {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
      }).toPromise()
      .then((res:Res) =>{
        this.a5 = Math.round(res.count.valueOf());
      })

      await this.http.get<Res>('http://127.0.0.1:3000/api/v1/attendance/'+user.userId+'/'+this.userAttendance[5], {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
      }).toPromise()
      .then((res:Res) =>{
        this.a6 = Math.round(res.count.valueOf());
      })

      await this.http.get<Res>('http://127.0.0.1:3000/api/v1/attendance/'+user.userId+'/'+this.userAttendance[6], {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
      }).toPromise()
      .then((res:Res) =>{
        this.a7 = Math.round(res.count.valueOf());
      })
    
  }

  formatNumber(num: number) {
    return Math.round((num*100)/14);
  }

}
