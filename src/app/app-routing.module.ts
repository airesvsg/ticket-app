import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: () => import('./pages/login/login.routes') },
  { path: 'tickets', canActivate: [authGuard], loadChildren: () => import('./pages/ticket/ticket.module').then(m => m.TicketModule) },
  { path: '**', loadChildren: () => import('./pages/not-found/not-found.routes') }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
