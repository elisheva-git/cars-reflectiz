import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DashboardViewService } from '../dashboard-view.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
        };
      }
     return {
        columns: 3,
        table: { cols: 1, rows: 2 },
        chart: { cols: 1, rows: 1 },
      };
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,private _service:DashboardViewService) {}

  ngOnInit(){
    this._service.getEngineTypeByGender()
  }
 
}
