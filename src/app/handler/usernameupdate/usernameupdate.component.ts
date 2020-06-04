import { Updateusername } from './../shared/models/updateusername';
import { Component, OnInit } from '@angular/core';
import { HandlerchangepasswordService } from '../shared/services/handlerchangepassword.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usernameupdate',
  templateUrl: './usernameupdate.component.html',
  styleUrls: ['./usernameupdate.component.css']
})
export class UsernameupdateComponent implements OnInit {

  constructor(private changeService: HandlerchangepasswordService) {
  }
updateusername: Updateusername;
emailpatten = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' ;


ngOnInit() {
this.changeService.getHandlerUserName()
.subscribe((updateusername: Updateusername) => {
this.updateusername = updateusername;
},
() => {
// tslint:disable-next-line:comment-format
//this.notificationService.printErrorMessage(error);
});


}
onsubmit(form: NgForm) {
const result = this.changeService.ChnageHandlerUserName(form.value , this.updateusername.id);
if (result) {
alert('UserName change Succesffuly');
} else {
alert('Something wrong ...Username Failed To update');
}

}

}
