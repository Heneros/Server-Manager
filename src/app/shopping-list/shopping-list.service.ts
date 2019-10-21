import { Song } from '../shared/song.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  songsChanged = new EventEmitter<Song[]>();
  private songs: Song[] = [
    new Song('Apples', 5),
    new Song('Tomatoes', 10),
  ];

  getSongs() {
    return this.songs.slice();
  }

  addSong(song: Song) {
    this.songs.push(song);
    this.songsChanged.emit(this.songs.slice());
  }

  addSongs(songs: Song[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.songs.push(...songs);
    this.songsChanged.emit(this.songs.slice());
  }
}
