import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user/user-page/user-details.component';
import { UserPageComponent } from './user/user-page/user-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  // { path: 'products', component: UserPageComponent},
  {
    path: 'users', component: UserPageComponent,
    children: [
      { path: ':id', component: UserDetailsComponent } // => users/1
      //{ path: 'id', component: UserDetailsComponent } => users/id
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
