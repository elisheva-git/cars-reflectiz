import { Component, OnInit } from '@angular/core';
import { DashboardViewService } from '../dashboard-view.service';
import { Label, SingleDataSet } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';


@Component({
  selector: 'app-statistic-visitors',
  templateUrl: './statistic-visitors.component.html',
  styleUrls: ['./statistic-visitors.component.css']
})
export class StatisticVisitorsComponent implements OnInit {

  //this card show with graph how many from the visitors filled out the form correctly
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public labels: Label[] = ['not','yes'];
  public chartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  presentVisitors:any=0

  constructor(private _service:DashboardViewService) { }

  ngOnInit(): void {
    let visitors: [number,number]=this._service.getVisitorsAndRegisterionCount()
    this.chartData.push(...[visitors[0]-visitors[1],visitors[1]])
    this.presentVisitors=((visitors[1]/visitors[0])*100).toFixed(0)
  }

}
