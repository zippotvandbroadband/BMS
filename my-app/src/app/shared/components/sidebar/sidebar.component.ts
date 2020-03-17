import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

toggle1 = true;
toggle2 = false;
toggle3 = false;
toggle4 = false;
toggle5 = false;
toggle6 = false;
toggle7 = false;

toggle(){
  this.toggle1= !this.toggle1
  this.toggle2= !this.toggle2
  this.toggle3= !this.toggle3
  this.toggle4= !this.toggle4
  this.toggle5= !this.toggle5
  this.toggle6= !this.toggle6
  this.toggle7= !this.toggle7
  console.log(this.toggle1)
}
  constructor() { }

  ngOnInit(): void {
  }

}
