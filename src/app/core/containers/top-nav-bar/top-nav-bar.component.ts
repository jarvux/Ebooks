import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  @Output() openAside = new EventEmitter<string>();

  state:string;

  constructor() { 
    this.state = 'open';
  }

  ngOnInit() {
  }

  open() {
    this.state = (this.state === 'close') ? 'open' : 'close';
    console.log(this.state);
    this.openAside.emit(this.state);
  }

}
