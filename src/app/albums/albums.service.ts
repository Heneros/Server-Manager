import { EventEmitter, Injectable } from '@angular/core';

import { Album } from './albums.model';
import { Song } from '../shared/song.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class AlbumService {
  albumSelected = new EventEmitter<Album>();
  private songs : Album[] = [
    new Album(
    'Slipknot', 
    'Iowa', 
    'https://avatars.yandex.net/get-music-content/63210/c2fa15e9.a.40252-4/m1000x1000', 
    [
      new Song("The Heretic Anthem."),
      new Song("People = Shit.")
    ]),
    new Album(
    'Wham!',  
    'Make It Big', 
    'https://images-na.ssl-images-amazon.com/images/I/714sQ6UH9vL._SL1500_.jpg',
    [
      new Song("Wake Me Up Before You Go-Go"),
      new Song("Everything She Wants ")
    ]),
  ];

  constructor(private slService: ShoppingListService) {}

  getSongs() {
    return this.songs.slice();
  }

  getSong(index: number) {
    return this.songs[index];
  }

  addSongsToShoppingList(songs: Song[]) {
    this.slService.addSongs(songs);
  }
}
