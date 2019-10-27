import { Song } from '../shared/song.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  songsChanged = new EventEmitter<Song[]>();
  private songs: Song[] = [
      new Song('Mac Quayle - youaremy4nswer.msv'),
      new Song('Mac Quayle - Memories'),

  ];

  getSongs() {
    return this.songs.slice();
  }

  addSong(song: Song) {
    this.songs.push(song);
    this.songsChanged.emit(this.songs.slice());
  }

  addSongs(songs: Song[]) {
    this.songs.push(...songs);
    this.songsChanged.emit(this.songs.slice());
  }
}
