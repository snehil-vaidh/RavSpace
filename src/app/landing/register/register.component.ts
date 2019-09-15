declare function require(path: string):any;

import { Component, OnInit, ɵSWITCH_COMPILE_NGMODULE__POST_R3__ } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../shared/user.service';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  constructor(private userService:UserService){
    
  }
  ngOnInit(){
    this.resertForm();
}

background_img = require("./Landing.svg")




resertForm(form?: NgForm){
    if(form != null)
    form.reset();
    this.user={
        Message:'',
        Email:'',
        FirstName:'',
        LastName:'',
        password:'',
        UserName:''
    }
}

OnSubmit(form: NgForm){
    this.userService.registerUser(form.value)
    .subscribe((data:any)=>{
        if(data.Succeeded == true)
            this.resertForm(form);
            
    });
}
}
   

