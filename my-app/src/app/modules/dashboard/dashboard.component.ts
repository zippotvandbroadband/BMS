import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { DashboardService } from '../dashboard.service';

export interface PeriodicElement {
  complain: string;
  position: number;
  subscriber: string;
  type:string;
  priority:string;
  status:string;
  subject:string;
  assignTo:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, complain: 'Some complain', subscriber:'Parth' , type: 'Type A' , priority:'High',status:'Resolve',subject:'some subject',assignTo:'Some User'},
  {position: 2, complain: 'some other complain', subscriber: 'Paresh', type: 'Type B',priority:'urgent',status:'Resolve',subject:'some subject',assignTo:'Some User'},
  {position: 3, complain: 'one other complain', subscriber:'Harish' , type: 'Type C',priority:'low',status:'Resolve',subject:'some subject',assignTo:'Some User'},
  {position: 4, complain: 'and more complain', subscriber: 'Hardik', type: 'Type D',priority:'medium',status:'Resolve',subject:'some subject',assignTo:'Some User'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bigCharts = [];
  cards = [];
  pie = [];
  displayedColumns: string[] = ['position', 'complain', 'subscriber', 'type','priority','status','subject','assignTo'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.bigCharts = this.dashboardService.bigCharts();
    this.cards = this.dashboardService.cards();
    this.pie = this.dashboardService.pie();
    this.dataSource.paginator = this.paginator;
  }

}
