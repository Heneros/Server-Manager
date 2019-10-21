import { Component, OnInit } from '@angular/core';

import { Song } from '../shared/song.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  songs: Song[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.songs = this.slService.getSongs();
    this.slService.songsChanged
      .subscribe(
        (ingredients: Song[]) => {
          this.songs = ingredients;
        }
      );
  }
}
