import { Component, OnInit, Input } from '@angular/core';
import { Albums } from '../albums.model';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
@Input() album: Albums;
  constructor() { }

  ngOnInit() {
  }

}
