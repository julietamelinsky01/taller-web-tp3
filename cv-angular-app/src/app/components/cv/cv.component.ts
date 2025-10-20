import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {
  // Properties to hold CV data can be defined here
  personalInfo = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890'
  };

  // You can also define methods to handle data or events
}