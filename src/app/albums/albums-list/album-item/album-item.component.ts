import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Albums } from '../../albums.model';
import { AlbumService } from '../../album.service';
@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {
  @Input() albums: Albums;
  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }
  onSelected(){
    this.albumService.albumSelected.emit(this.albums);
  }
}
