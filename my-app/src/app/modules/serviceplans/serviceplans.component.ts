import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  down: string;
  up: string;
  nas:string;
  ippool:string;
  status:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'silver', down: '5 mbps', up: '5 mbps',nas:'NAS 1',ippool:'IP Pool 1',status:'Enable'},
  {position: 2, name: 'gold', down: '10 mbps', up: '5 mbps',nas:'NAS 2',ippool:'IP Pool 1',status:'Enable'},
  {position: 3, name: 'pletinum', down: '100 mbps',up: '5 mbps',nas:'NAS 3',ippool:'IP Pool 1',status:'Enable'},
  {position: 4, name: 'bronze', down: '500 mbps', up: '100 mbps',nas:'NAS 4',ippool:'IP Pool 1',status:'Enable'},
];

@Component({
  selector: 'app-serviceplans',
  templateUrl: './serviceplans.component.html',
  styleUrls: ['./serviceplans.component.scss']
})
export class ServiceplansComponent implements OnInit {
  constructor() { }

  displayedColumns: string[] = ['position', 'name', 'down', 'up','nas','ippool','status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
  }

}
