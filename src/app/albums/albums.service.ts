import { EventEmitter, Injectable } from '@angular/core';

import { Album } from './albums.model';
import { Song } from '../shared/song.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class AlbumService {
  albumSelected = new EventEmitter<Album>();

  // private songs: Album[] = [
  //   new Album(
  //     'Tasty Schnitzel',
  //     'A super-tasty Schnitzel - just awesome!',
  //     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
  //     [
  //       new Song('Meat', 1),
  //       new Song('French Fries', 20)
  //     ]),
  //   new Album('Big Fat Burger',
  //     'What else you need to say?',
  //     'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
  //     [
  //       new Song('Buns', 2),
  //       new Song('Meat', 1)
  //     ])
  // ];
  private songs : Album[] = [
    new Album(
    'Slipknot', 
    'Iowa', 
    'https://avatars.yandex.net/get-music-content/63210/c2fa15e9.a.40252-4/m1000x1000', 
    [
      new Song("The Heretic Anthem.", 3),
      new Song("People = Shit.", 3)
    ]),
    new Album(
    'Wham!',  
    'Make It Big', 
    'https://images-na.ssl-images-amazon.com/images/I/714sQ6UH9vL._SL1500_.jpg',
    [
      new Song("Wake Me Up Before You Go-Go", 3),
      new Song("Everything She Wants ", 3)
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
