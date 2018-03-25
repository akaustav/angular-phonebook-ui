import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopularComponent } from './pages/popular/popular.component';
import { ContactsComponent } from './pages/contacts/contacts.component';


const routes: Routes = [
  { path: '', redirectTo: 'popular', pathMatch: 'full' },
  { path: 'popular', component: PopularComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', redirectTo: 'popular' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
