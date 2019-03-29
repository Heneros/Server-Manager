import { Albums } from './albums.model';
import { EventEmitter } from '@angular/core';

export class AlbumService{
  albumSelected = new EventEmitter<Albums>();
  private albums : Albums[] = [
    new Albums('A Test album', 'This is simply a test', 'https://sova.ponominalu.ru/wp-content/uploads/2018/11/slipknot.jpg'),
    new Albums('Another album', 'This is simply a test', 'https://sova.ponominalu.ru/wp-content/uploads/2018/11/slipknot.jpg'),
  ];

  getAlbums(){
    return this.albums.slice();
  }
}