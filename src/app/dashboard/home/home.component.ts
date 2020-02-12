import { Component, OnInit } from '@angular/core';
import { Homedetails } from '../models/homedetails.interface';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  homeDetails: Homedetails;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {

    this.dashboardService.getHomeDetails()
    .subscribe((homeDetails: Homedetails) => {
      this.homeDetails = homeDetails;
    },
    error => {
      // tslint:disable-next-line:comment-format
      //this.notificationService.printErrorMessage(error);
    });

  }

}
