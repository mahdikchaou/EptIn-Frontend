import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms"
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthenticationService} from "../_services";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public registerForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router,
              private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      gender: [''],
      birthDate: [''],
      country: [''],
      city: [''],
      phoneNumber: [],
      email: [''],
      password: [''],
      role: ['']
    })
  }

  register() {
    this.authService.register(this.registerForm.value).subscribe(res => {
      //alert("Signup Successful");
      this.router.navigate(['']);
    })
  }
}
