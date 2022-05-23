import { Component } from '@angular/core';
import { CoursesService } from './services/courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}    
            </li>
        </ul>
        <img [src]="imageUrl" />
        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>
        <div (click)="onDivClicked()">
            <button class="btn btn-primary" [class.active]="isActive" (click)="onSave($event)">Save</button>
            <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save Color</button>
        </div>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
        <br/>
        {{ course.title | uppercase | lowercase }} <br/>
        {{ course.students | number }} <br/>
        {{ course.rating | number:'2.2-2' }} <br/>
        {{ course.price | currency:'AUD':true:'3.2-2' }} <br/>
        {{ course.releaseDate | date:'shortDate' }} <br/>
        {{ text | summary:10 }} <br/>
        <input [(ngModel)]="inputString" />
        <!-- <p>{{ inputString | titlecase }}</p> -->
        <p>{{ inputString | customtitlecase }}</p>
    `
})
export class CoursesComponent {
    title = "List of courses";
    imageUrl = "http://lorempixel.com/400/200";
    colSpan = 2;
    isActive = false;
    email = "me@example.com";
    courses;
    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    };
    text = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, cumque eveniet repellat quaerat natus nulla aut similique? Dignissimos illo consequatur beatae tenetur, natus animi corrupti eos, ipsum possimus delectus officia!`;
    inputString = "";

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title;
    }

    onSave($event: any) {
        $event.stopPropagation();

        console.log("Button was clicked", $event);
    }

    onDivClicked() {
        console.log("Div was clicked");
    }

    onKeyUp() {
        console.log(this.email);
    }
}