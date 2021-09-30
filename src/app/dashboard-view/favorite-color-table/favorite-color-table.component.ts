import { Component, OnInit } from '@angular/core';
import { DashboardViewService } from '../dashboard-view.service';

@Component({
  selector: 'app-favorite-color-table',
  templateUrl: './favorite-color-table.component.html',
  styleUrls: ['./favorite-color-table.component.css']
})
export class FavoriteColorTableComponent implements OnInit {

  //this card display with table the names of all the registrations and the favorite color to each one
  displayedColumns = ['name','color'];
  dataSource: any  

  constructor(private _service:DashboardViewService) { }

  ngOnInit(): void {
    this.dataSource=this._service.getPotentialBuyersDetails()
  }

}
