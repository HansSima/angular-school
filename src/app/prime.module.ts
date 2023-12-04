import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import { TableModule } from 'primeng/table';
import { DataViewModule } from 'primeng/dataview';

@NgModule({
  imports: [
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    CardModule,
    SplitterModule,
    TableModule,
    DataViewModule,
  ],
  exports: [
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    CardModule,
    SplitterModule,
    TableModule,
    DataViewModule,
  ],
})
export class PrimeModule {}
