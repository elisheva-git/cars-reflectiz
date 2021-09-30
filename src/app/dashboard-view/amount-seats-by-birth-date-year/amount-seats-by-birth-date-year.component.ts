import { Component, OnInit } from '@angular/core';
import { Label, Color } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { DashboardViewService } from '../dashboard-view.service';


@Component({
  selector: 'app-amount-seats-by-birth-date-year',
  templateUrl: './amount-seats-by-birth-date-year.component.html',
  styleUrls: ['./amount-seats-by-birth-date-year.component.css']
})
export class AmountSeatsByBirthDateYearComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public yearsLabels: Label[] =[];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [];

  constructor(private _service:DashboardViewService) { }

  ngOnInit(): void {
    for (let index = 2000; index <= new Date().getFullYear(); index++) {
      this.yearsLabels.push(index.toString())
    }
    this.barChartData.push({data:this._service.getAvgAmountSeatsByYear(),label:'seats'})
  }
}
