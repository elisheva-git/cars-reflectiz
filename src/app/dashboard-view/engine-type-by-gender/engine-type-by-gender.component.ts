import { Component, OnInit } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { DashboardViewService, engineTypeByGender } from '../dashboard-view.service';


@Component({
  selector: 'app-engine-type-by-gender',
  templateUrl: './engine-type-by-gender.component.html',
  styleUrls: ['./engine-type-by-gender.component.css']
})
export class EngineTypeByGenderComponent implements OnInit {

//  Displays in two graphs one for each gender
// And shows the distribution of engine type in each gender 
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public labels: Label[] = ['electric','fuel'];
  public chartDataFemale: SingleDataSet = [];
  public chartDataMale: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  engineTypeByGenderObj:engineTypeByGender | undefined

  constructor(private _service:DashboardViewService) { }

  ngOnInit(): void {
    this.engineTypeByGenderObj=this._service.getEngineTypeByGender()
    this.chartDataFemale.push(...[this.engineTypeByGenderObj.electricFemale,this.engineTypeByGenderObj.fuelFemale])
    this.chartDataMale.push(...[this.engineTypeByGenderObj.electricMale,this.engineTypeByGenderObj.fuelMale])
  }

}
