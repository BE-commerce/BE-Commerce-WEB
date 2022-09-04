import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { SharedModule } from 'src/app/shared/shared.module'; 
import { DraggableCarouselComponent } from './draggable-carousel/draggable-carousel.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [StoreComponent, DraggableCarouselComponent]
})
export class StoreModule { }
