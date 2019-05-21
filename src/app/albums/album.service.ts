import {EventEmitter, Injectable } from '@angular/core';

import { Albums } from './albums.model';
import { Music } from '../shared/music.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class AlbumService{
  albumSelected = new EventEmitter<Albums>();

  private albums : Albums[] = [
    new Albums(
    'Slipknot', 
    'Iowa', 
    'https://avatars.yandex.net/get-music-content/63210/c2fa15e9.a.40252-4/m1000x1000', 
    [
      new Music("The Heretic Anthem."),
      new Music("People = Shit.")
    ]),
    new Albums(
    'Wham!',  
    'Make It Big', 
    'https://images-na.ssl-images-amazon.com/images/I/714sQ6UH9vL._SL1500_.jpg',
    [
      new Music("Wake Me Up Before You Go-Go"),
      new Music("Everything She Wants ")
    ]),
  ];

constructor(private slService: ShoppingListService){}

  getAlbums(){
    return this.albums.slice();
  }

addSongsToShoppingList(songs: Music[]){
  this.slService.addSongs(songs);
}
}