import { AdminGuard } from './../admin.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminsidebarComponent } from './adminsidebar/adminsidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/modules/shared.module';
import { AdminroutingModule } from './adminrouting.module';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material/dialog';
import { Auth } from '../auth.guard';
import { AdmindashbaordComponent } from './admindashbaord/admindashbaord.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { ParkinglistComponent } from './parkinglist/parkinglist.component';
import { ParkingprofileComponent } from './parkingprofile/parkingprofile.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ChangeadminpasswordComponent } from './changeadminpassword/changeadminpassword.component';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { SlotComponent } from './slot/slot.component';
import { CustomeruserComponent } from './customeruser/customeruser.component';
import { HandleruserComponent } from './handleruser/handleruser.component';
import { AlluserComponent } from './alluser/alluser.component';
import { SlotreservationComponent } from './slotreservation/slotreservation.component';
import { SlotreservationhistoryComponent } from './slotreservationhistory/slotreservationhistory.component';
import { SlotreservationlistComponent } from './slotreservationlist/slotreservationlist.component';
import { AddparkingComponent } from './addparking/addparking.component';
import { AdminprofilepicComponent } from './adminprofilepic/adminprofilepic.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProfilesettingComponent } from './profilesetting/profilesetting.component';
import { ChangeusernameComponent } from './changeusername/changeusername.component';


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [
    AdminsidebarComponent,
    AdmindashbaordComponent,
    AdminprofileComponent,
    ParkinglistComponent,
     ParkingprofileComponent,
      UserprofileComponent,
       ChangeadminpasswordComponent,
       SlotComponent,
       CustomeruserComponent,
       HandleruserComponent,
       AlluserComponent,
       SlotreservationComponent,
       SlotreservationhistoryComponent,
       SlotreservationlistComponent,
       AddparkingComponent,
       AdminprofilepicComponent,
       ProfilesettingComponent,
       ChangeusernameComponent,

      ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AdminroutingModule,
    HttpClientModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    BrowserModule,
      FormsModule,
       ReactiveFormsModule
  ],
  entryComponents: [SlotreservationComponent, AddparkingComponent, AdminprofilepicComponent],
  providers:    [Auth, NgxNavigationWithDataComponent],
})
export class AdminModule { }
