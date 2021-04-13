import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  hideSuccess = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  async onSubmitFeedback(form: NgForm) {
    const feedback = {
      courseCode: form.value.courseCode,
      instructor: form.value.instructor,
      ratings: [form.value.a, form.value.b, form.value.c, form.value.c, form.value.d, form.value.e]
    }

    console.log(JSON.stringify(feedback));

    await this.http.post('http://127.0.0.1:3000/api/v1/feedback', JSON.stringify(feedback), {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    })
    .toPromise()
    .then(res => {
      console.log(res);
    });

    this.hideSuccess = false;

    form.reset();
  }

}
