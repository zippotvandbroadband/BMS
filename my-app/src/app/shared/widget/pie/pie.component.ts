import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions = {};
  constructor() { }
@Input() data = [];
  ngOnInit(): void {
    this.chartOptions ={
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Browser market shares in January, 2018'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
      exporting:{
        enabled:true
      },
      credits:{
        enabled:false
      },
      series: [{
          name: 'Brands',
          colorByPoint: true,
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
