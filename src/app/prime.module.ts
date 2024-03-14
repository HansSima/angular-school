import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import { TableModule } from 'primeng/table';
import { DataViewModule } from 'primeng/dataview';
import { DockModule } from 'primeng/dock';
import { TimelineModule } from 'primeng/timeline';
import { MenuModule } from 'primeng/menu';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { RatingModule } from 'primeng/rating';

@NgModule({
  imports: [
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    CardModule,
    SplitterModule,
    TableModule,
    DataViewModule,
    DockModule,
    TimelineModule,
    MenuModule,
    FieldsetModule,
    PanelModule,
    RatingModule,
  ],
  exports: [
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    CardModule,
    SplitterModule,
    TableModule,
    DataViewModule,
    DockModule,
    TimelineModule,
    MenuModule,
    FieldsetModule,
    PanelModule,
    RatingModule,
  ],
})
export class PrimeModule {}
