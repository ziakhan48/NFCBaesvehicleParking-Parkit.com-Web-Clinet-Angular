import { Admindashboardcount } from './../shared/models/admindashboardcount.model';
import { AdmindashbaordcountService } from './../shared/services/admindashbaordcount.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admindashbaord',
  templateUrl: './admindashbaord.component.html',
  styleUrls: ['./admindashbaord.component.css']
})
export class AdmindashbaordComponent implements OnInit {

  dashbaordcount: Admindashboardcount;
  constructor(private admindashboardservice: AdmindashbaordcountService) { }

  ngOnInit() {

    this.admindashboardservice.AdminDashbaordDetail()
    .subscribe((dashbaordCount: Admindashboardcount) => {
      this.dashbaordcount = dashbaordCount;
    },
    error => {
      // tslint:disable-next-line:comment-format
      //this.notificationService.printErrorMessage(error);
    });
  }

}
