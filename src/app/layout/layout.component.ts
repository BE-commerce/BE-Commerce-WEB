import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Layout } from './layout.types';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {

  // config: AppConfig;
  layout: Layout;
  private _unsubscribeAll: Subject<any> = new Subject<any>();


  constructor(
    private _activatedRoute: ActivatedRoute,
    @Inject(DOCUMENT) private _document: any, 
    private _router: Router,) { }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
  }

  
  setLayout(layout: string): void
  {
      // Clear the 'layout' query param to allow layout changes
      this._router.navigate([], {
          queryParams        : {
              layout: null
          },
          queryParamsHandling: 'merge'
      }).then(() => {
        console.log("asd")

          // Set the config
          // this._fuseConfigService.config = {layout};
      });
  }

}
