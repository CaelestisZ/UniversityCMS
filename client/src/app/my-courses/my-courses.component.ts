import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface courses{
  status: Number,
  data:{
    course: [];
  };
};

interface course {
  courseCode: string,
  topic: string,
  article: string,
  video: string
};

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {

  notClicked = true;

  noDocuments = true;

  courseCode: String = "";

  documents:course[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  backToggle() {
    this.notClicked = true;
  }

  async courseContent(course: String) {
    console.log(course);
    this.notClicked = false;
    this.courseCode = course;
    await this.http.get<courses>('http://127.0.0.1:3000/api/v1/courses'+'/'+course, {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
    }).toPromise()
    .then((res: courses) => {
      this.documents.push(...res.data.course);
      if (Array.isArray(this.documents) && this.documents.length) {
        // array exists and is not empty
        this.noDocuments = false;
      }
    })
    console.log(this.documents);
    this.documents.forEach(announcement => {
      console.log(announcement);
    });
  }
}
