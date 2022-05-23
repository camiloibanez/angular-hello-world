import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../services/authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title;
  authors;

  constructor(service: AuthorsService) { 
    this.title = service.getAuthors().length + " Authors";
    this.authors = service.getAuthors();
  }

  ngOnInit(): void {
  }

  getTitle() {
    return this.title;
}

}
