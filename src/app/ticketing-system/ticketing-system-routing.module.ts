import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketingSystemComponent } from './ticketing-system.component';

const routes: Routes = [{ path: '', component: TicketingSystemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketingSystemRoutingModule { }
