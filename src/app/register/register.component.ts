import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms"
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public registerForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http:HttpClient, private router: Router) { }
  ngOnInit(): void{
    this.registerForm=this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      gender:[''],
      birthday:[''],
      country:[''],
      city:[''],
      phoneNumber:[],
      email:[''],
      password:[''],
    })
  }
  register(){
     this.http.post<any>("http://localhost:3000/user", this.registerForm.value)
       .subscribe(res=>{
         alert("Signup Successful");
         this.registerForm.reset();
         this.router.navigate(['myprofile/informations_generales'])
       }, err=>{
         alert("Something went wrong, try again")
       })
  }
}
