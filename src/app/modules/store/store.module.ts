import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FiltersComponent } from './filters/filters.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreRoutes } from './store.routing';
import { TshirtComponent } from './categories/tshirt/tshirt.component';
import { SweatshirtComponent } from './categories/sweatshirt/sweatshirt.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreRoutes,
  ],
  declarations: [StoreComponent, ProductListComponent, FiltersComponent, SearchBarComponent, TshirtComponent, SweatshirtComponent]
})
export class StoreModule { }
