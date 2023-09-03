import { Component, OnInit,NgModule } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  // user: SocialUser;
  // loggedIn: boolean;

  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      // this.user = user;
      // this.loggedIn = (user != null);
    });
  }

}
