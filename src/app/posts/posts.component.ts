import { Component, OnInit } from '@angular/core';
import { AppError } from '../app-error';
import { BadRequestError } from '../bad-request-error';
import { NotFoundError } from '../not-found-error';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  posts: any;
  

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getAll()
    .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    this.posts.splice(0, 0, post);
    input.value = '';

    this.service.create(post)
      .subscribe(
        (newPost: any) => {
          post.id = newPost.id;
          console.log(newPost);
        },
        (error: AppError) => {
          this.posts.splice(0,1);

          if(error instanceof BadRequestError) {
            // this.form.setErrors(error.originalError);
          } else {
            throw error;
          } 
        }
      );
  }

  updatePost(post: any) {
    this.service.update(post, { isRead: true })
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        }
      );
    // this.http.put(this.url, JSON.stringify(post))
    //   .subscribe(response => {
    //     console.log(response);
    //   });
  }

  deletePost(post: any) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe(
        null, 
        (error: AppError) => {
          this.posts.splice(index, 0, post);

          if(error instanceof NotFoundError) {
            alert('This post has already been deleted.');
          } else {
            throw error;
          }
        }
      );
  }
}
