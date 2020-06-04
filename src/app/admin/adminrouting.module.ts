import { ProfilesettingComponent } from './profilesetting/profilesetting.component';
import { AdminGuard } from './../admin.guard';
import { SlotreservationlistComponent } from './slotreservationlist/slotreservationlist.component';
import { SlotreservationhistoryComponent } from './slotreservationhistory/slotreservationhistory.component';
import { ChangeadminpasswordComponent } from './changeadminpassword/changeadminpassword.component';
import { ChangehandlerpasswordComponent } from './../handler/changehandlerpassword/changehandlerpassword.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { HandleruserComponent } from './handleruser/handleruser.component';
import { CustomeruserComponent } from './customeruser/customeruser.component';
import { AlluserComponent } from './alluser/alluser.component';
import { SlotComponent } from './slot/slot.component';
import { ParkingprofileComponent } from './parkingprofile/parkingprofile.component';
import { ParkinglistComponent } from './parkinglist/parkinglist.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { AdmindashbaordComponent } from './admindashbaord/admindashbaord.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminsidebarComponent } from './adminsidebar/adminsidebar.component';
import { Auth } from '../auth.guard';


export const AdminroutingModule: ModuleWithProviders = RouterModule.forChild([
  {
      path: 'admin',
      component: AdminsidebarComponent, canActivate: [AdminGuard],

      children: [
        { path: 'admindashbaord', component: AdmindashbaordComponent},
         {path : 'adminprofile', component: AdminprofileComponent},
         {path : 'parkinglist' , component: ParkinglistComponent},
         {path:  'parkingprofile', component: ParkingprofileComponent},
         {path:  'parkingprofile/:parkingId', component: ParkingprofileComponent},
         {path:  'slot/:parkingId', component: SlotComponent},
         {path : 'alluser' , component: AlluserComponent},
         {path : 'customeruser' , component: CustomeruserComponent},
         {path : 'handleruser' , component: HandleruserComponent},
         {path : 'userprofile/:userId' , component: UserprofileComponent},
         {path : 'changeadminpassword' , component: ChangeadminpasswordComponent},
         {path : 'slotreservationlist/:slotId' , component : SlotreservationlistComponent},
         {path : 'profilesetting' , component : ProfilesettingComponent}
      ]
    }
]);
