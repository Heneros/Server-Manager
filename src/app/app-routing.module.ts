import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { albumsComponent } from './albums/albums.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AlbumStartComponent } from './albums/album-start/album-start.component';
import { AlbumDetailComponent } from './albums/album-detail/album-detail.component';
import { AlbumEditComponent } from './albums/album-edit/album-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/albums', pathMatch: 'full' },
  { path: 'albums', component: albumsComponent, children: [
    { path: '', component: AlbumStartComponent },
    { path: 'new', component: AlbumEditComponent },
    { path: ':id', component: AlbumDetailComponent },
    { path: ':id/edit', component: AlbumEditComponent },
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
