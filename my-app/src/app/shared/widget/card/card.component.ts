import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() lable:string;
  @Input() total:string;
  @Input() percentage:string;
  @Input() data:Array<any>;
  @Input() public flag:boolean;

  Highcharts = Highcharts;
  chartOptions = {};
  constructor() {
   }

  ngOnInit(): void {
    console.log(this.flag);
    this.chartOptions ={
      chart: {
          type: 'area',
          backgroundColor:null,
          borderWidth:0,
          margin:[2,2,2,2],
          height:60
      },
      title: {
          text: null
      },
      subtitle: {
          text: null
      },
      credits:{
        enabled:false
      },
      exporting:{
        enabled:false
      },
      xAxis: {
        lebels:{
          enable:false
        },
        title: {
          text:null
        },
        startOnTick :false,
        endOnTick : false,
        tickOptions:[]
      },
      yAxis: {
        lebels:{
          enable:false
        },
        title: {
          text:null
        },
        startOnTick :false,
        endOnTick : false,
        tickOptions:[]
      },
      tooltip: {
          split: true,
          outside:true
      },
      legend:{
        enabled:false
      },
      series: [{
          data: this.data
      }]
  };
  HC_exporting(Highcharts);
  setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    )
  }, 300);
  }

}
