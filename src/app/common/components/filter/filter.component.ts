import {
  Component,
  computed,
  EventEmitter,
  Output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { cloneDeep } from 'lodash';
import {
  Category,
  CategoryInitValue,
  MonthWrap,
} from '../../models/month.model';
import { uid } from 'uid';
import Moment from 'moment';
import { CategoryTitleEnum } from '../../constants/month.constant';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [NzDatePickerModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  //#region Props
  @Output() monthsEmitter = new EventEmitter<MonthWrap[]>();

  protected date = signal<Date[]>([]);

  protected months = computed((): MonthWrap[] => {
    const dateRange: Date[] = this.date() || [];

    if (dateRange && dateRange.length && dateRange.length > 1) {
      const startDate = dateRange[0];
      const endDate = dateRange[1];

      const dates = [];

      while (startDate <= endDate) {
        const date = cloneDeep(startDate);
        dates.push(this.convertToMonthShell(date));

        startDate.setMonth(startDate.getMonth() + 1);
      }

      return dates;
    }

    return [];
  });
  //#endregion

  //#region Constructor
  public constructor() {}
  //#endregion

  //#region Methods
  protected filter() {
    this.monthsEmitter.emit(this.months());
  }

  protected convertToMonthShell(date: Date): MonthWrap {
    return {
      id: uid(),
      value: date,
      title: Moment(date).format('MMMM YYYY'),
      total: 0,
      categories: this.initCategories(),
    };
  }

  protected initCategories(): Category[] {
    return [
      {
        id: uid(),
        name: CategoryTitleEnum.income,
        value: CategoryInitValue,
        sub: [],
        type: 'main',
      },
      {
        id: uid(),
        name: CategoryTitleEnum.expenses,
        value: CategoryInitValue,
        sub: [],
        type: 'main',
      },
    ];
  }
  //#endregion
}
