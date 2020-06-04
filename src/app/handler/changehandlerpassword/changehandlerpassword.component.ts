import { HandlerchangepasswordService } from './../shared/services/handlerchangepassword.service';
import { NgForm } from '@angular/forms';
import { Changepassword } from './../shared/models/changepassword.model';
import { Component, OnInit } from '@angular/core';
import { HandlerprofileService } from '../shared/services/handlerprofile.service';
import { Handlerprofile } from '../shared/models/handlerprofile.model';

@Component({
  selector: 'app-changehandlerpassword',
  templateUrl: './changehandlerpassword.component.html',
  styleUrls: ['./changehandlerpassword.component.css']
})
export class ChangehandlerpasswordComponent implements OnInit {
  handlerProfile: Handlerprofile;
  // tslint:disable-next-line:typedef-whitespace
  formDatachangepassword : Changepassword = new Changepassword();
  constructor(private handlerchnageService: HandlerchangepasswordService
    ,         private handlerServices: HandlerprofileService) { }

  ngOnInit() {
    this.handlerServices.getHandlerProfile()
    .subscribe((handlerProfile: Handlerprofile) => {
      this.handlerProfile = handlerProfile;
    },
    error => {
      // tslint:disable-next-line:comment-format
      //this.notificationService.printErrorMessage(error);
    });
  }

  onsubmit(form: NgForm) {
const result = this.handlerchnageService.ChnageHandlerPassword(form.value);

if (result) {
  alert('Password change Succesffuly');
} else {
  alert('Something Wrong ...Password change failed');
}

  }

}
