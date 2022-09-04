import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartComponent } from 'src/app/components/cart/cart.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit { 
  
  constructor() { }

  isMenuOpen: boolean = false
  isCartSelected: boolean = false

  ngOnInit() {
  }

  isOpen(value: boolean) {
    if (value == false) {

      setTimeout(() => {
        this.isMenuOpen = value
      }, 1000);

    } else {
      this.isMenuOpen = value
    }
  }
 

}
