import { Component, OnInit } from '@angular/core';

import { AlbumService } from './albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers: [AlbumService]
})
export class albumsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
