import {Injectable } from '@angular/core';

import { Album } from './albums.model';
import { Song } from '../shared/song.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class AlbumService {

  private songs : Album[] = [
    new Album( 
    'Slipknot', 
    'Iowa', 
    'https://lh3.googleusercontent.com/proxy/4MS5M4v4HJECQyQRAR2JnxKbmMsqBbsMZS9qzFMonEFtoKfI99PN7rbpa4L4k5YBpUxshEYtc6d6x_6rC2_VEFrLueIbdyzIkQdGv9xR0NoYFd6E7lF6oS0q', 
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
