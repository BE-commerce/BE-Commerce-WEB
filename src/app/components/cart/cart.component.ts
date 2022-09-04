import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @ViewChild('mySidenav') sidenav: ElementRef;

  constructor(private renderer: Renderer2) { }

  // @Input() isCartSelected: boolean

  // isCartSelected: boolean

  // get isCartOpen(): boolean {
  //   return this.isCartSelected;
  // }

  // @Input() set isCartOpen(value: boolean) {
  //   this.isCartSelected = value;
  //   console.log(value)
  // }

  // @Output() myevent: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
    //   this.myevent.emit(
    //     console.log(this.isCartSelected)
    //    );
  }

  closeSidenav() {
    this.renderer.setStyle(
      this.sidenav.nativeElement,
      'width',
      '0'
    ) 
  }

  openSidenav() {
    this.renderer.setStyle(
      this.sidenav.nativeElement,
      'width',
      '400px'
    )  
  }

}
