import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { VehiclestopsComponent } from './vehiclestops/vehiclestops.component';

export const routes: Routes = [
    {path:"",component:DashboardComponent},
    {path:"profile",component:ProfileComponent},
    {path:"addVehicle",component:AddvehicleComponent},
    {path:"stops",component:VehiclestopsComponent}
];

