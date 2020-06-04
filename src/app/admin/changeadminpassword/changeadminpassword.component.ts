import { ChangepasswordService } from './../shared/services/changepassword.service';
import { Component, OnInit } from '@angular/core';
import { Changepassword } from '../shared/models/changepassword.model';
import { NgForm, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AdminprofileService } from '../shared/services/adminprofile.service';
import { Adminprofile } from '../shared/models/adminprofile.model';
@Component({
  selector: 'app-changeadminpassword',
  templateUrl: './changeadminpassword.component.html',
  styleUrls: ['./changeadminpassword.component.css']
})
export class ChangeadminpasswordComponent implements OnInit {
  constructor(private changeService: ChangepasswordService ,
              public adminprofileservice: AdminprofileService , private fb: FormBuilder) {
              }
  adminProfile: Adminprofile;
  formDatachangepassword: Changepassword = new Changepassword();

  ngOnInit() {
    this.adminprofileservice.getAdminProfile()
    .subscribe((adminProfile: Adminprofile) => {
      this.adminProfile = adminProfile;
    },
    error => {
      // tslint:disable-next-line:comment-format
      //this.notificationService.printErrorMessage(error);
    });

  }
  onsubmit(form: NgForm) {
const result = this.changeService.ChnageAdminPassword(form.value , this.adminProfile.id);

if (result) {
  alert('Password change Succesffuly');

} else {
  alert('Something Wrong   ...Password Update Failed');
}

  }

}
