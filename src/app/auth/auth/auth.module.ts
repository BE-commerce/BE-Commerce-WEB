import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component'; 
import { AuthRoutes } from './auth.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutes
  ],
  declarations: [SignInComponent, SignUpComponent]
})
export class AuthModule { }
