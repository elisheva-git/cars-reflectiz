import { Component, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { DashboardViewService } from '../dashboard-view.service';


@Component({
  selector: 'app-count-to-hobby',
  templateUrl: './count-to-hobby.component.html',
  styleUrls: ['./count-to-hobby.component.css']
})
export class CountToHobbyComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = []
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data:[], label: 'Hobby' }
  ];

  constructor(private _serviceDash:DashboardViewService) { }

  ngOnInit(): void {
    this._serviceDash.getCountPerHobbey().forEach((count,hobby)=>{
      this.barChartLabels.push(hobby)
      this.barChartData[0].data?.push(count)
    })
    // this.barChartLabels=this._serviceDash.getCountPerHobbey().keys()
    // this.barChartData.push({ data: this._serviceDash.getCountPerHobbey().values(), label: 'Series A' })
  }

}
