import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navbarData } from '../sidenav/nav-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  ngOnInit(): void {}
  @Output() onTabChange = new EventEmitter<number>();
  activatedTab: number = 0;
  setTab(index:number) {
    this.activatedTab = index;
    debugger;
    this.onTabChange.emit(this.activatedTab);
  }

  navData = navbarData;

}
