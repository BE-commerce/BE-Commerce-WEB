import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DraggableCarouselComponent } from './draggable-carousel/draggable-carousel.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SwiperModule
  ],
  declarations: [HomeComponent, DraggableCarouselComponent]
})
export class HomeModule { }
