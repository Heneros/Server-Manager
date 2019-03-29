import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumListComponent } from './albums/albums-list/album-list.component';
import { AlbumDetailComponent } from './albums/album-detail/album-detail.component';
import { AlbumItemComponent } from './albums/albums-list/album-item/album-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlbumsComponent,
    AlbumItemComponent,
    AlbumListComponent ,
    AlbumDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
