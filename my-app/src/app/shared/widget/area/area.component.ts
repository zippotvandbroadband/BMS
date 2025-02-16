import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  chartOptions : {};
  Highcharts = Highcharts;
  @Input() data:Array<any>;
  constructor() { }

  ngOnInit(): void {
    this.chartOptions ={
      chart: {
          type: 'area'
      },
      title: {
          text: 'Test Data'
      },
      subtitle: {
          text: 'Demo'
      },
      credits:{
        enable:false
      },
      exporting:{
        enable:true
      },
      tooltip: {
          split: true,
          valueSuffix: ' millions'
      },
      series:this.data
  };
  HC_exporting(Highcharts);
  setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    )
  }, 300);
  }

}
