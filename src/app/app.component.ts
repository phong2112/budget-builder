import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilterComponent } from './common/components/filter/filter.component';
import { MonthWrap } from './common/models/month.model';
import { CustomTableComponent } from './common/components/custom-table/custom-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FilterComponent, CustomTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  //#region Props
  public title = 'budget-builder';
  protected months = signal<MonthWrap[]>([]);

  //#endregion

  //#region Constructor
  public constructor() {}

  //#region Methods
  protected onMonthsEmit(data: MonthWrap[]) {
    this.months.set(data);
  }
  //#endregion
}
