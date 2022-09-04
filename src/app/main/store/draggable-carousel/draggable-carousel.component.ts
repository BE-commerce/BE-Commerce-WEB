import { Component, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Pagination, Scrollbar, Virtual } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Virtual]);

@Component({
  selector: 'app-draggable-carousel',
  templateUrl: './draggable-carousel.component.html',
  styleUrls: ['./draggable-carousel.component.css']
})
export class DraggableCarouselComponent implements OnInit {

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  constructor() {

  }

  ngOnInit() {

  }
  config: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 50,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 5,
        spaceBetween: 40
      }
    },


  };


}
