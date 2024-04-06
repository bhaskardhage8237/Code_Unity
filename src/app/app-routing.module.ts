import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'ticketing-system', loadChildren: () => import('./ticketing-system/ticketing-system.module').then(m => m.TicketingSystemModule) }
   
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
