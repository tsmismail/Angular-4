import { Component, Input, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

class Login{
   userName:string;
   password:string
}
@Component({
   templateUrl:'./login.component.html',
   providers: [Login]
})


export class loginComponent {
   @ViewChild('loginform') form: any;
   constructor(public login: Login,private router:Router, private route:ActivatedRoute){
   }

   onLogin(){
      if(this.form.valid){
         //this.form.reset();
         if(this.login.userName === 'ismail'){
            this.router.navigate(['/adminDashboard']);
         }else{
            this.router.navigate(['/userDashboard'])
         }
      }
   }
}
