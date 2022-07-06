import { Component, OnDestroy, OnInit } from '@angular/core';
import { manual } from './componente';

@Component({
    selector: 'app-manual',
    templateUrl: './manual.component.html'
    styleUrls: ['./manual.component.css']
  })
  export class manual implements OnInit, OnDestroy {

    constructor() {}
    
    ngOnInit(): void {
      
    }
  }