import { Routes, RouterModule } from '@angular/router';
import { SweatshirtComponent } from './categories/sweatshirt/sweatshirt.component';
import { TshirtComponent } from './categories/tshirt/tshirt.component';
import { StoreComponent } from './store.component'; 

const routes: Routes = [
  {
    component: StoreComponent,
    path: '',
    children:[
      {
        path:'tshirt',
        component:TshirtComponent
      },
      {
        path:'sweatshirt',
        component:SweatshirtComponent
      },
    ]
  },
];

export const StoreRoutes = RouterModule.forChild(routes);
