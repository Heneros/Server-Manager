import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Albums } from '../albums.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albums-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums : Albums[];

  constructor(private albumService: AlbumService ) {

   }

  ngOnInit() {
    this.albums = this.albumService.getAlbums();
  }

}
