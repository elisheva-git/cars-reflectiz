import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash/dash.component';
import { MaterialModule } from '../material.module';
import { CardComponent } from './card/card.component';
import { DashboardViewRoutingModule } from './dashboard-view-routing.module';
import { ChartsModule } from 'ng2-charts';
import { DashboardViewService, engineTypeByGender } from './dashboard-view.service';
import { EngineTypeByGenderComponent } from './engine-type-by-gender/engine-type-by-gender.component';
import { StatisticVisitorsComponent } from './statistic-visitors/statistic-visitors.component';
import { AmountSeatsByBirthDateYearComponent } from './amount-seats-by-birth-date-year/amount-seats-by-birth-date-year.component';
import { CountToHobbyComponent } from './count-to-hobby/count-to-hobby.component';
import { FavoriteColorTableComponent } from './favorite-color-table/favorite-color-table.component';



@NgModule({
  declarations: [DashComponent,CardComponent,EngineTypeByGenderComponent,StatisticVisitorsComponent
    ,AmountSeatsByBirthDateYearComponent,FavoriteColorTableComponent,CountToHobbyComponent],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardViewRoutingModule,
    ChartsModule
  ],
  providers:[DashboardViewService]
})
export class DashboardViewModule { }
