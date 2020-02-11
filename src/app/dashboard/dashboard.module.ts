import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RootComponent } from './root/root.component';
import { SettingComponent } from './setting/setting.component';
import { FormsModule } from '@angular/forms';
import { routing } from './dashboard-routing.module';
import { SharedModule } from '../shared/modules/shared.module';
import { Auth } from '../auth.guard';
import { DashboardService } from './services/dashboard.service';



@NgModule({
  declarations: [HomeComponent, RootComponent, SettingComponent],
  imports: [
    CommonModule,
    FormsModule,
    routing,
    SharedModule
  ],
  exports:      [ ],
  providers:    [Auth, DashboardService]

})
export class DashboardModule { }
