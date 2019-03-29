import { Component, OnInit } from '@angular/core';

import { Albums } from './albums.model';
import { AlbumService } from './album.service';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers: [AlbumService]
})
export class AlbumsComponent implements OnInit {
selectedAlbum: Albums;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.albumService.albumSelected
    .subscribe(
      (albums: Albums) => {
        this.selectedAlbum = albums;
      }
    );
  }

}
