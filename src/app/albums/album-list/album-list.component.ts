import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Album } from '../albums.model';
import { AlbumService } from '../albums.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  songs: Album[];

  constructor(private albumsService: AlbumService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.songs = this.albumsService.getSongs();
  }

  onNewAlbum() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
