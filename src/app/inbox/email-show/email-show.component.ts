import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Email } from '../email';
// import { EmailService } from '../email.service';
// import { switchMap } from 'rxjs';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css'],
})
export class EmailShowComponent implements OnInit {
  email!: Email;

  constructor(
    private route: ActivatedRoute // private emailService: EmailService
  ) {
    //snapshot way
    // console.log(this.route.snapshot.data);

    //observable way
    this.email = route.snapshot.data?.['email']; // if network is slow get the data from the current url "snapshot"
    this.route.data.subscribe(({ email }) => {
      this.email = email;
    });
  }

  ngOnInit(): void {
    // not such a good way >> the resolver is way better ^^
    // // this.route.params.subscribe(({ id }) => {
    // //   this.emailService.getEmail(id).subscribe((email) => {
    // //     console.log(email);
    // //   });
    // // });
    // this.route.params
    //   .pipe(
    //     switchMap(({ id }) => {
    //       return this.emailService.getEmail(id);
    //     })
    //   )
    //   .subscribe((email) => {
    //     this.email = email;
    //   });
  }
}
