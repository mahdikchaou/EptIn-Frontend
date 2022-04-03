import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {DataService} from "../data.service";
import {AuthenticationService} from "../_services";
import {Role} from "../models/role";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message!: string;
  public loginForm!: FormGroup;
  error = '';
  loading = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private http: HttpClient,
              private authService: AuthenticationService) {
    // redirect to profile if already logged in
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      // navigate to profiles according to role
      this.naviagateToProfileAccordingToRole(currentUser);


    }
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  gotoregister() {
    this.router.navigate(['register'])
  }

  login() {
    this.loading = true;
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      user => {
        console.log('Login success - user info', user);
        if (user) {
          // navigate to profiles according to role
          this.naviagateToProfileAccordingToRole(user);
        }
      },
      error => {
        this.loading = false;
        this.error = 'Invalid email or password';
      });
  }


  // navigate to profiles according to role
  private naviagateToProfileAccordingToRole(currentUser: any): void {
    switch (currentUser.role) {
      case Role.ADMIN:
        this.router.navigate(['admin']);
        break;
      case Role.EX_STUDENT:
      case Role.STUDENT:
        this.router.navigate(['home']);
        break;
    }
  }
}
