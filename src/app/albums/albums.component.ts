import { Component, OnInit } from '@angular/core';

import { Album } from './albums.model';
import { AlbumService } from './albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers: [AlbumService]
})
export class albumsComponent implements OnInit {
  selectedalbum: Album;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.albumService.albumSelected
      .subscribe(
        (album: Album) => {
          this.selectedalbum = album;
        }
      );
  }

}
