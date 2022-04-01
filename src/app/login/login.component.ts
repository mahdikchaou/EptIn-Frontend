import { Component ,OnInit} from '@angular/core';
import{FormGroup, FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import{DataService} from "../data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message!:string;
  public loginForm!: FormGroup
  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient, private data:DataService) { }
  ngOnInit(): void{
    this.loginForm=this.formBuilder.group({
      email:[''],
      password:[''],
    });
    this.data.currentMessage.subscribe(message=>this.message=message)
  }

  gotoregister(){
      this.router.navigate(['register'])
  }
  login(){
    this.http.get<any>("http://localhost:3000/user")
      .subscribe(res=>{
        const user=res.find((a:any)=>{
          return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password
          });
        if(user){
          this.loginForm.reset();
          this.router.navigate(['home'])
        }else{
          alert("Email and password don't match")
        }
      },err=>{
        alert("Something went wrong. Try again")
    })
  }
  toggle(event: Event):void{
    let elementId:string=(event.target as Element).id;
    this.data.changeMessage(elementId);
  };

}
