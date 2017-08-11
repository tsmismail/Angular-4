import {Component} from '@angular/core';
import { UserService } from '../../services/User.Service';

@Component({
    templateUrl:'user.component.html',
    styleUrls:['./user.component.css'],
    providers:[ UserService ]
})

export class UserComponent{
    userDetails: any;
    constructor(private  userService:UserService){
        userService.getUserDetails().subscribe(res => {
            this.userDetails = res.data;
            console.log(this.userDetails);
        })
    }
}
