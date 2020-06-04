import { HandlerGuard } from './../handler.guard';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ParkprofileComponent } from './parkprofile/parkprofile.component';
import { SlotsComponent } from './slots/slots.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/modules/shared.module';
import { Auth } from '../auth.guard';
import { SlotService } from './shared/services/slot.service';
import { HandlerroutingModule } from './handlerrouting.module';
import { SlotcreateupdateComponent } from './slotcreateupdate/slotcreateupdate.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { HandlerprofileComponent } from './handlerprofile/handlerprofile.component';
import { SlotreservationComponent } from './slotreservation/slotreservation.component';
import { ChangehandlerpasswordComponent } from './changehandlerpassword/changehandlerpassword.component';
import { SlotreservationlistComponent } from './slotreservationlist/slotreservationlist.component';
import { HandlerprofilesettingComponent } from './handlerprofilesetting/handlerprofilesetting.component';
import { UsernameupdateComponent } from './usernameupdate/usernameupdate.component';
import { ParkingimageComponent } from './parkingimage/parkingimage.component';
@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [SidebarComponent, DashboardComponent, ParkprofileComponent, SlotsComponent, SlotcreateupdateComponent, HandlerprofileComponent, SlotreservationComponent, ChangehandlerpasswordComponent, SlotreservationlistComponent, HandlerprofilesettingComponent, UsernameupdateComponent, ParkingimageComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HandlerroutingModule,
    HttpClientModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatDialogModule

  ],
  providers:    [HandlerGuard, SlotService],
  entryComponents: [SlotcreateupdateComponent, SlotreservationComponent],
})
export class HandlerModule { }
