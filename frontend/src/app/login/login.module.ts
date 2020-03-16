import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LOGIN_ROUTE } from './login.route';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [RouterModule.forChild([LOGIN_ROUTE])],
  declarations: [LoginComponent]
})
export class LoginModule {}
