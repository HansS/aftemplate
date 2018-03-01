import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksRoutingModule } from './links-routing.module';
import { LinksComponent } from './links.component';
import { LinkListComponent } from './link-list/link-list.component';
import { LinkFilterPipe } from './link-filter.pipe';
import { LinkListItemComponent } from './link-list-item/link-list-item.component';
import { LinkAddComponent } from './link-add/link-add.component';
import { LinkEditComponent } from './link-edit/link-edit.component';
import { LinkDetailsComponent } from './link-details/link-details.component';
import { LinkService } from './link.service';

@NgModule({
  imports: [
    CommonModule,
    LinksRoutingModule
  ],
  declarations: [LinksComponent, LinkListComponent, LinkFilterPipe, LinkListItemComponent, LinkAddComponent, LinkEditComponent, LinkDetailsComponent],
  providers: [LinkService]
})
export class LinksModule { }
