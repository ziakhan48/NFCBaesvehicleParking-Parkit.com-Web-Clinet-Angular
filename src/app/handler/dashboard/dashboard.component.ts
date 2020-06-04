
import { Dashboardcount } from './../shared/models/dashboardcount.model';
import { Component, OnInit } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { DashboardService } from '../shared/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit  {


  dashbaordCount: Dashboardcount;
  constructor(private dashboardservice: DashboardService) {

  }

  ngOnInit() {

    this.dashboardservice.getDashbaordDetail()
    .subscribe((dashbaordCount: Dashboardcount) => {
      this.dashbaordCount = dashbaordCount;
    },
    error => {
      // tslint:disable-next-line:comment-format
      //this.notificationService.printErrorMessage(error);
    });
  }





}
