import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ResourcesComponent} from "./resources/resources.component";
import {AuthGuard} from "./auth.guard";
import {HelpComponent} from "./help/help.component";
import {PublishComponent} from "./publish/publish.component";
import {InvitationComponent} from "./invitation/invitation.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'invitation', component: InvitationComponent},
  {path: 'resource', component: ResourcesComponent, canActivate: [AuthGuard]},
  {path: 'help', component: HelpComponent},
  {path: 'publish', component: PublishComponent},
  {path: '**', redirectTo: 'resource'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
