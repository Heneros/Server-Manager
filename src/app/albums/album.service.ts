import {EventEmitter, Injectable } from '@angular/core';

import { Albums } from './albums.model';
import { Music } from '../shared/music.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class AlbumService{
  albumSelected = new EventEmitter<Albums>();

  private albums : Albums[] = [
    new Albums(
      'A Test album', 
    'This is simply a test', 
    'https://sova.ponominalu.ru/wp-content/uploads/2018/11/slipknot.jpg', 
    [
      new Music("Миллионы Алых Роз.", "Наступает ночь"),
      new Music("Миллионы Алых Роз.", "Наступает ночь")
    ]),
    new Albums(
      'Another album', 
    'This is simply a test', 
    'https://sova.ponominalu.ru/wp-content/uploads/2018/11/slipknot.jpg',
    [
      new Music("Миллионы Алых Роз.", "Наступает ночь"),
      new Music("Миллионы Алых Роз.", "Наступает ночь")
    ]),
  ];

constructor(private slService: ShoppingListService){}

  getAlbums(){
    return this.albums.slice();
  }

addSongsToShoppingList(songs: Music[]){
  this.slService.addMusics(songs);
}
}