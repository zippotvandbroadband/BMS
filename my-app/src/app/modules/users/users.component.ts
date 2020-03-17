import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormGroupDirective, NgForm, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  type: string;
  status: string;
  login : string;
  ip:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', type:'Type A',status : 'Disable',login:'18-12-2020',ip:'123.123.123.12'},
  {position: 2, name: 'Helium', type:'Type B',  status:'Online',login:'18-11-2020',ip:'12.12.12.12'},
  {position: 3, name: 'Lithium', type:'Type C', status: 'Offline',login:'12-4-2020',ip:'1.1.1.1'}
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor() { }

  hide = true;
  hide1 = true;

  displayedColumns: string[] = ['position', 'name', 'type', 'status','login','ip'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
  }

}
