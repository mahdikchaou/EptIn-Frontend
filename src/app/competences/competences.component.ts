import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CompetencesService} from "./competences.service";
import {Certification} from "../models/certification";
import {Skill} from "../models/skill";
import {AuthenticationService} from "../_services";
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent implements OnInit {
  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
  closeResult = '';

  certification!: Certification[];
  skill!: Skill[];
  currentUser = this.authService.currentUserValue;
  public skillForm!: FormGroup
  public certificationForm!: FormGroup


  constructor(private modalService: NgbModal, private HttpClient: HttpClient, private formBuilder: FormBuilder, private authService: AuthenticationService, private router: Router, private competencesService: CompetencesService) {
  }
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      window.location.reload()

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {

    this.competencesService.getCertifications(this.currentUser.userId.toString()).subscribe(data2 => {
      this.certification = data2;
    })
    this.competencesService.getSkills(this.currentUser.userId.toString()).subscribe(data2 => {
      this.skill = data2;
    })
    this.certificationForm = this.formBuilder.group({
      name: [''],
      field: [''],
      authority: [''],
      issueDate: [''],
      expirationDate: [''],
      comment: [''],
      userId: this.currentUser.userId,
      id: []
    })
    this.skillForm = this.formBuilder.group({
      name: [''],
      comment: [''],
      userId: this.currentUser.userId,
      id: []
    })
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

  addCertification() {
    this.HttpClient.post<any>("http://localhost:3000/certification", this.certificationForm.value)
      .subscribe(res => {
        this.certificationForm.reset();
      }, err => {
        alert("Something went wrong, try again")
      })
  }

  addSkill() {
    this.HttpClient.post<any>("http://localhost:3000/skill", this.skillForm.value)
      .subscribe(res => {
        this.skillForm.reset();
      }, err => {
        alert("Something went wrong, try again")
      })
  }


}
