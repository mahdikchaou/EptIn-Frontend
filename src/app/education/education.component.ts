import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EducationService} from "./education.service";
import {education} from "../models/education";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../_services";
import {HttpClient, HttpParams} from "@angular/common/http";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  closeResult = '';

  public EducationForm !: FormGroup;
  education1!:education
  education: education[]=[];
  currentUser = this.authService.currentUserValue;


  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder, private HttpClient: HttpClient, private authService: AuthenticationService, private router: Router, private educationService: EducationService) {
  }
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
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
    this.EducationForm = this.formBuilder.group({
      admissionDate: [''],
      graduationDate: [''],
      prepa: [''],
      comment: [''],
      option: [''],
      masterField: [''],
      masterUniversity: [''],
      phdField: [''],
      phdUniversity: [''],
      pfeField: [''],
      pfeUniversity: [''],
      userId: this.currentUser.id
    })
    this.educationService.getEducation(this.currentUser.id.toString()).subscribe(data2 => {
      this.education = data2;
      for (var ed of this.education ){
        let form = {
          admissionDate: ed.admissionDate,
          graduationDate: ed.graduationDate,
          //prepa: ed.prepa,
          comment: ed.comment,
          option: ed.option,
          masterField: ed.masterField,
          masterUniversity: ed.masterUniversity,
          phdField: ed.phdField,
          phdUniversity: ed.phdUniversity,
          pfeField: ed.pfeField,
          pfeUniversity: ed.pfeUniversity,
          userId: this.currentUser.id
        }
        this.EducationForm.setValue(form)
      }
      this.education1=this.education[0];


    });

  }

  updateEducation() {
    if(this.education[0]) {
      this.HttpClient.put<any>("http://localhost:9090/api/profile/education/"+this.education[0].id, this.EducationForm.value)
        .subscribe(res => {
          window.location.reload()
        }, err => {
          alert("problemo")
        })
    }else{
      this.HttpClient.post<any>("http://localhost:9090/api/profile/education",this.EducationForm.value)
        .subscribe(res=>{
          alert('good')},err=>{
          alert("problem")
        })
    }

        }

}
