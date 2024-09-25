import { Component, Input } from '@angular/core';
import { MonthWrap } from '../../models/month.model';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CategoryTypeEnum } from '../../constants/month.constant';

@Component({
  selector: 'app-custom-table',
  standalone: true,
  imports: [NzTableModule],
  templateUrl: './custom-table.component.html',
  styleUrl: './custom-table.component.scss',
})
export class CustomTableComponent {
  @Input('months') months: MonthWrap[] = [];

  protected categoryTypes = CategoryTypeEnum;
}
