import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { AdminModule } from './layouts/admin/admin.module';
import { UserModule } from './layouts/user/user.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    AdminModule,
    UserModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { }
