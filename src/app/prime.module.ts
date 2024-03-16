import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import { TableModule } from 'primeng/table';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { DockModule } from 'primeng/dock';
import { TimelineModule } from 'primeng/timeline';
import { MenuModule } from 'primeng/menu';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { DividerModule } from 'primeng/divider';
import { EditorModule } from 'primeng/editor';

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
    TagModule,
    MessageModule,
    MessagesModule,
    DividerModule,
    EditorModule,
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
    TagModule,
    MessageModule,
    MessagesModule,
    DividerModule,
    EditorModule,
  ],
})
export class PrimeModule {}
