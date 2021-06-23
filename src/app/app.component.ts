import { Joke } from './models/joke';
import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { CatsPhoto } from './models/cats-photo';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  
  fileName = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
   
  }

  onFileSelected(event) {

      const file:File = event.target.files[0];

      if (file) {

          this.fileName = file.name;

          const formData = new FormData();

          formData.append("file", file);
          formData.append("customerId", '123456')

          const upload$ = this.http.post("https://felivelasquez-eval-prod.apigee.net/upload", formData);

          upload$.subscribe();
      }
  }
}
