import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  address: string;
  type: string;
  status:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', address: '123.123.123.123', type: 'Type A',status:'enable'},
  {position: 2, name: 'Helium', address: '123.123.123.123', type: 'Type B',status:'enable'},
  {position: 3, name: 'Lithium', address: '123.123.123.123', type: 'Type C',status:'enable'},
  {position: 4, name: 'Beryllium', address: '123.123.123.123', type: 'Type D',status:'enable'}
];

@Component({
  selector: 'app-nas',
  templateUrl: './nas.component.html',
  styleUrls: ['./nas.component.scss']
})
export class NasComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['position', 'name', 'address', 'type','status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  ngOnInit(): void {
  }

}
