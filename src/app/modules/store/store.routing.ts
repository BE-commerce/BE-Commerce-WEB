import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store.component';

const routes: Routes = [
  {
    component: StoreComponent,
    path: ''
  },
];

export const StoreRoutes = RouterModule.forChild(routes);
