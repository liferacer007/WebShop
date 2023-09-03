import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggleCart:boolean=false;
  isLoginModal : boolean =false;
  isSignupClicked: boolean=false;
  constructor(private router: Router,
    private socialAuthService : SocialAuthService
    ) { }

  ngOnInit(): void {
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(() => this.router.navigate(['home']));
  }
  showLoginSignup(){
    const element :any = document.getElementById('login');
    // element.style.display='block';
    this.isLoginModal=true;
  }
  hideLoginModal(){
    this.isLoginModal=false;
    // const element :any = document.getElementById('login');
    // element.style.display='none';
  }
  
  toggleCartMenu(){ 
  
    const element :HTMLElement |null  = document.getElementById('cartDropdown');
    if(element?.classList.contains('cartMenuShow')){
      element.classList.remove('cartMenuShow');
      element?.classList.add('cartMenuhide');
      // this.toggleCart=false;
    }else{
      element?.classList.remove('cartMenuhide');
      element?.classList.add('cartMenuShow');
      this.toggleCart=true;
    }
  }

  toggleLoginSignup(toggleAction:string){
    if(toggleAction=='signup'){
      this.isSignupClicked =true; 
    }else{
      this.isSignupClicked=false;
    }

  }

}
