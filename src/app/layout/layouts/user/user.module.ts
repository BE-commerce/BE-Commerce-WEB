import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartComponent } from 'src/app/components/cart/cart.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [UserComponent, MenuComponent, CartComponent],
  exports:[
    UserComponent
  ]
})
export class UserModule { }
