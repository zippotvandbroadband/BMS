import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatButtonModule } from "@angular/material/button";
import { ServiceplansComponent } from "src/app/modules/serviceplans/serviceplans.component";
import { NasComponent } from "src/app/modules/nas/nas.component";
import { IppoolsComponent } from "src/app/modules/ippools/ippools.component";
import { UsersComponent } from 'src/app/modules/users/users.component';
import { LogsComponent } from 'src/app/modules/logs/logs.component';
import { MatTabsModule } from "@angular/material/tabs";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    ServiceplansComponent,
    NasComponent,
    IppoolsComponent,
    UsersComponent,
    LogsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule, 
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatButtonModule,
    MatTabsModule,
    HttpClientModule
  ],
  providers:[
    DashboardService
  ]
})
export class DefaultModule { }
