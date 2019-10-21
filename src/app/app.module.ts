import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { albumsComponent } from './albums/albums.component';
import { AlbumListComponent } from './albums/album-list/album-list.component';
import { AlbumDetailComponent } from './albums/album-detail/album-detail.component';
import { AlbumItemComponent } from './albums/album-list/album-item/album-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { AlbumStartComponent } from './albums/album-start/album-start.component';
import { AlbumEditComponent } from './albums/album-edit/album-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    albumsComponent,
    AlbumListComponent,
    AlbumDetailComponent,
    AlbumItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    AlbumStartComponent,
    AlbumEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
