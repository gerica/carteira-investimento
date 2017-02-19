import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'invet-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  @Output()
  toggleMenuEmitter = new EventEmitter();
  // toggleMenu: any;

  constructor() { }

  ngOnInit() {
  }

  onChangeVisibility(): void {
    console.log('estou aqui');
    this.toggleMenuEmitter.emit();
  }

}
