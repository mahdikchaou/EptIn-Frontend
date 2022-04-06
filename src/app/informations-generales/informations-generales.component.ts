import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Informationsgenerales} from "../models/Informationsgenerales";
import {InformationsGeneralesService} from "./informations-generales.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../_services";


@Component({
  selector: 'app-informations-generales',
  templateUrl: './informations-generales.component.html',
  styleUrls: ['./informations-generales.component.scss']
})
export class InformationsGeneralesComponent implements OnInit {
  public infoGnForm !: FormGroup;

  items = [
    {name: 'Aerospace Engineering'},
    {name: 'Automobile Engineering'},
    {name: 'Civil Engineering'},
    {name: 'Energy engineering'},
    {name: 'Mechanical Engineering'},
    {name: 'Industrial Engineering'},
    {name: 'Nuclear Engineering'},
    {name: 'Hydraulic Engineering'},
    {name: 'Computer Engineering'},
    {name: 'Electrical Engineering'},
    {name: 'Telecommunication Engineering'},
    {name: 'Engineering Management'},
  ];

  infogn!: Informationsgenerales;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  currentUser = this.authService.currentUserValue;


  constructor(private formBuilder: FormBuilder, private router: Router,
              private infognservice: InformationsGeneralesService,
              private authService: AuthenticationService, private HttpClient: HttpClient) {
  }

  gotomyprofile() {
    this.router.navigate(['myprofile/informations_generales'])
  };

  gotocompetences() {
    this.router.navigate(['myprofile/competences'])
  };

  gotocree() {
    this.router.navigate(['myprofile/offres_crees'])
  };

  gotocreer() {
    this.router.navigate(['myprofile/creer_offre'])
  };

  gotoeducation() {
    this.router.navigate(['myprofile/education'])
  };

  gotopostule() {
    this.router.navigate(['myprofile/applied'])
  };

  gotoexperience() {
    this.router.navigate(['myprofile/experience'])
  }

  ngOnInit(): void {
    this.infoGnForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      gender: [''],
      birthday: [''],
      country: [''],
      city: [''],
      phoneNumber: [],
      email: [''],
      password: [''],
      field: [''],
      role:[''],
    })
    this.infognservice.getInformationsGenerales(this.currentUser.id.toString()).subscribe(data1 => {
      this.infogn = data1;
      let form= {
        firstName: this.infogn.firstName,
        lastName: this.infogn.lastName,
        gender: this.infogn.gender,
        birthday: this.infogn.birthday,
        country: this.infogn.country,
        city: this.infogn.city,
        phoneNumber:this.infogn.phoneNumber,
        email: this.infogn.email,
        password: this.infogn.password,
        field: [''],
        role:this.infogn.role,
      }
      this.infoGnForm.setValue(form);

    });
  }

  updateInfoGn() {
    let url: string = "http://localhost:9090/api/users/" + this.currentUser.id.toString();
    this.HttpClient.put<any>(url, this.infoGnForm.value)
      .subscribe(res => {
      }, err => {
        alert("Something went wrong, try again")
      })
  }

}
