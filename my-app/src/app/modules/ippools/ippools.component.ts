import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: '1', name: 'IP pool 1', weight: 1.0079, symbol: 'H'},
  {position: '', name: '', weight: 4.0026, symbol: 'He'},
  {position: '2', name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: '', name: '', weight: 9.0122, symbol: 'Be'},
  {position: '3', name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: '6', name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: '7', name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: '8', name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: '9', name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: '1', name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-ippools',
  templateUrl: './ippools.component.html',
  styleUrls: ['./ippools.component.scss']
})
export class IppoolsComponent implements OnInit {
  ranges = ["Range-1"];
  rangeNumber = 1;

  addInputRange() {
    this.rangeNumber++; 
    this.ranges.push("Range-"+this.rangeNumber)
  }
  removeRange(event){
    console.log(event);
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    var index = this.ranges.indexOf(value)
    this.ranges.splice(index,1);
    this.rangeNumber--;
  }
  constructor() { }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
  }

}
