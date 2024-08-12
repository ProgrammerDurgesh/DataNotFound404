import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-projrct';
  student:any[]=[
  {
    'name':'Durgesh Yadav'
  },
  {
    'name':'Aman Yadav'
  },
  {
    'name':'Vinay Yadav'
  },
  {
    'name':'Abhay Yadav'
  },
  {
    'name':'Shivam Yadav'
  },
  {
    'name':'Naveen Yadav'
  },
  {
    'name':'Akash Yadav'
  },
  {
    'name':'golu Yadav'
  }
  ];
}
