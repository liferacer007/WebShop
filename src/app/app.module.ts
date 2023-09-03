import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './modules/welcome-page/welcome-page.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { PageFilterComponent } from './modules/page-filter/page-filter.component';
import { SocialLoginModule, SocialAuthServiceConfig,GoogleLoginProvider } from 'angularx-social-login';
@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    PageFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    RouterModule,
    SocialLoginModule
  ],
  exports :[PageFilterComponent],
  providers: [
    {
    provide : 'SocialAuthServiceConfig',
    useValue : {
      autoLogin :true,
      providers : [
        {
          id : GoogleLoginProvider.PROVIDER_ID,
          provider : new GoogleLoginProvider('195974667086-o798o5j9okne2tvc4am9irg54g80hhmg.apps.googleusercontent.com')
        }
      ],
      // onError: (err: any) => {
      //   console.error(err);
      // }
    } as SocialAuthServiceConfig,
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
