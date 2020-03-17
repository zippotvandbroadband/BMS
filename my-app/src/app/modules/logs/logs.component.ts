import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  mac: string;
  nas: string;
  reply:string;
  msg:string;
}

export interface PeriodicElement1 {
  date: string;
  name: string;
  online: string;
  download: string;
  upload:string;
  total:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hardik', mac: '123.123.123.123', nas: 'NAS 1',reply:'Access',msg:'some Text'},
  {position: 2, name: 'Paresh', mac: '123.123.123.123', nas: 'NAS 2',reply:'Authorization',msg:'some Text'},
  {position: 3, name: 'Parth', mac: '123.123.123.123', nas: 'NAS 3',reply:'Error',msg:'some Text'},
  {position: 4, name: 'Harish', mac: '123.123.123.123', nas: 'NAS 4',reply:'Error',msg:'some Text'}
];

const ELEMENT_DATA1: PeriodicElement1[] = [
  {date: '2020', name: 'Hardik',online: '360d 19:00', download: '500gb',upload:'120gb',total:'620gb'},
  {date: '2020', name: 'Paresh',online: '360d 19:00', download: '500gb',upload:'120gb',total:'620gb'},
  {date: '2020', name: 'Parth', online: '360d 19:00', download: '500gb',upload:'120gb',total:'620gb'},
  {date: '2020', name: 'Harish',online: '360d 19:00', download: '500gb',upload:'120gb',total:'620gb'}
];

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['position', 'name', 'mac', 'nas','reply','msg'];
  displayedColumns1: string[] = ['date', 'name', 'online', 'download','upload','total'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource1 = new MatTableDataSource(ELEMENT_DATA1);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource1.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
  }

}
