import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tshirt',
  templateUrl: './tshirt.component.html',
  styleUrls: ['./tshirt.component.css']
})
export class TshirtComponent implements OnInit {

  constructor() { }

  products: any[] = [
    { id: 1, image: 'https://www.kaft.com/static/images/cache/1200/tisort_theland_21108_1200_1200.jpg?cacheID=1644829419000', name: 'The Land', price: 240, currency: 'TL', rating: [1, 2, 3] },
    { id: 2, image: 'https://www.kaft.com/static/images/cache/1200/tisort_ravera_21094_1200_1200.jpg?cacheID=1657024801000', name: 'The Home', price: 270, currency: 'TL', rating: [1, 2] },
    { id: 3, image: 'https://www.kaft.com/static/images/cache/1200/tisort_time_19638_1200_1200.jpg?cacheID=1659413605000', name: 'The Car', price: 270, currency: 'TL', rating: [1, 2, 3, 4, 5] },
    { id: 4, image: 'https://www.kaft.com/static/images/cache/1200/tisort_yuvica_20996_1200_1200.jpg?cacheID=1644829418000', name: 'The Table', price: 250, currency: 'TL', rating: [1, 2, 3] },
    { id: 5, image: 'https://www.kaft.com/static/images/cache/1200/tisort_cosmos_18208_1200_1200.jpg?cacheID=1634184805000', name: 'The Universe', price: 190, currency: 'TL', rating: [1, 2, 3, 4] },
    { id: 6, image: 'https://www.kaft.com/static/images/cache/1200/tisort_laugar_21045_1200_1200.jpg?cacheID=1654185714000', name: 'The World', price: 230, currency: 'TL', rating: [1, 2] },
    { id: 7, image: 'https://www.kaft.com/static/images/cache/1200/tisort_astrok_18067_1200_1200.jpg?cacheID=1651236995000', name: 'The Humanity', price: 250, currency: 'TL', rating: [1, 2, 3] }
  ]

  ngOnInit() {
  }

}
