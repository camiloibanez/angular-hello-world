import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // courses: {id: number, name: string}[];

  // constructor() {
  //   this.courses = [
  //     {id: 1, name: 'course1'}
  //   ];
  // }

  post = {
    title: "Title",
    isFavorite: true
  }

  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: true,
    likesCount: 6
  }

  courses = [1, 2];

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite changed", eventArgs);
  }

  viewMode = 'somethingElse';

  // courses = [
  //   {id: 1, name: 'course1'},
  //   {id: 2, name: 'course2'},
  //   {id: 3, name: 'course3'}
  // ]

  // onAdd() {
  //   this.courses.push({id: 4, name: 'course4'});
  // }

  // onRemove(course: { id: number, name: string }) {
  //   let index = this.courses.indexOf(course);
  //   this.courses.splice(index, 1);
  // }

  // onChange(course: { id: number, name: string}) {
  //   course.name = 'UPDATED';
  // }

  // loadCourses() {
  //   this.courses = [
  //     {id: 1, name: 'course1'},
  //     {id: 2, name: 'course2'},
  //     {id: 3, name: 'course3'}
  //   ];
  // }

  // trackCourse(index: number, course: {id: number, name: string}) {
  //   return course ? course.id : undefined;
  // }

  canSave = true;

  task = {
    title: "Review applications",
    assignee: null
  }
}
