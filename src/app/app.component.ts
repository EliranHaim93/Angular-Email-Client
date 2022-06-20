import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //way 1
  /*
  signedin = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.signedin$.subscribe((signedin) => {
      this.signedin = signedin;
    });
  }
  */

  //*way 2
  signedin$: BehaviorSubject<boolean | null>;

  constructor(private authServie: AuthService) {
    this.signedin$ = this.authServie.signedin$;
  }
  //>> use the async pipe in the template ( signedin$ | async)

  //*end of way 2

  ngOnInit() {
    this.authServie.checkAuth().subscribe(() => {});
  }
}
