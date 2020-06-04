import { ParkingimageComponent } from './parkingimage/parkingimage.component';
import { HandlerprofilesettingComponent } from './handlerprofilesetting/handlerprofilesetting.component';
import { Auth } from './../auth.guard';
import { SlotreservationlistComponent } from './slotreservationlist/slotreservationlist.component';
import { ChangehandlerpasswordComponent } from './changehandlerpassword/changehandlerpassword.component';
import { HandlerprofileComponent } from './handlerprofile/handlerprofile.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ParkprofileComponent } from './parkprofile/parkprofile.component';
import { SlotsComponent } from './slots/slots.component';
import { HandlerGuard } from '../handler.guard';
import { UsernameupdateComponent } from './usernameupdate/usernameupdate.component';

// tslint:disable-next-line:align
// tslint:disable-next-line:typedef-whitespace
export const HandlerroutingModule : ModuleWithProviders = RouterModule.forChild([
  {
      path: 'handler',
      component: SidebarComponent, canActivate: [Auth],

      children: [
      //  { path: '', component: HomeComponent },
       { path: 'dashboard',  component: DashboardComponent },
       { path: 'parkprofile',  component: ParkprofileComponent },
       { path: 'slots',  component: SlotsComponent },
       {path: 'handlerprofile' , component: HandlerprofileComponent},
       {path: 'changehandlerpassword' , component: ChangehandlerpasswordComponent},
       {path: 'slotreservationlist' , component: SlotreservationlistComponent},
       {path: 'handlerprofilesetting' , component: HandlerprofilesettingComponent},
       {path: 'usernameupdate' , component: UsernameupdateComponent},
       {path: 'parkingimage' , component: ParkingimageComponent}
      ]
    }
]);
