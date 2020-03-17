import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormGroupDirective, NgForm, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from "../dashboard.service";
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export interface PeriodicElement {
  userName: string;
  position: string;
  status: string;
  plan: string;
  nas:string;
  ip:string;
  mac:string;
}

const ELEMENT_DATA: PeriodicElement[] = [];



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  constructor(private dashboardService : DashboardService) { }
  hide = true;
  hide1 = true; 

  displayedColumns: string[] = ['position', 'userName', 'status', 'plan','nas','ip','mac'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  users = [];
  matcher = new MyErrorStateMatcher();
  ngOnInit(): void {
     this.dashboardService.getUserData().subscribe(data => {
       this.users = data;
       this.users.forEach( user => {
         if(user.status == false || user.status == 'false'){
           user.status = "Active"
         }else{
           user.status = "Disable"
         }
       })
       this.dataSource.data = this.users;
     });
  }

}
