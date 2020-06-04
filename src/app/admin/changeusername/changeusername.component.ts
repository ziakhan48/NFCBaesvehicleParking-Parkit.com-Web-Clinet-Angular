
import { Changeusername } from './../shared/models/changeusername';
import { Component, OnInit } from '@angular/core';
import { ChangepasswordService } from '../shared/services/changepassword.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-changeusername',
  templateUrl: './changeusername.component.html',
  styleUrls: ['./changeusername.component.css']
})
export class ChangeusernameComponent implements OnInit {

  constructor(private changeService: ChangepasswordService) {
    }
changeusername: Changeusername;
emailpatten = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' ;


ngOnInit() {
  this.changeService.getAdminUserName()
.subscribe((changeusername: Changeusername) => {
this.changeusername = changeusername;
},
() => {
// tslint:disable-next-line:comment-format
//this.notificationService.printErrorMessage(error);
});


}
onsubmit(form: NgForm) {
const result = this.changeService.ChnageAdminUserName(form.value , this.changeusername.id);
if (result) {
  alert('UserName change Succesffuly');
} else {
  alert('Something wrong ...Username Failed To update');
}

}

}
