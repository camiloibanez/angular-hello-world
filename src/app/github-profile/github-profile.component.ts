import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');  // if you will definitely destroy and then intialize the component again
    console.log(id);
    // this.route.paramMap  // if you plan on reusing a component without destroying and intializing it again
    // .subscribe(params => {
    //   let id = Number(params.get('id'));
    //   console.log(id);
    // });
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest' }
    });
  }

}
