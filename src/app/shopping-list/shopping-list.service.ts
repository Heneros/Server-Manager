import { Subject } from 'rxjs';

import { Song } from '../shared/song.model';

export class ShoppingListService {
  songsChanged = new Subject<Song[]>();
  startedEditing = new Subject<number>();

  private songs: Song[] = [
      new Song('Mac Quayle - youaremy4nswer.msv'),
      new Song('Mac Quayle - Memories'),

  ];

  getSongs() {
    return this.songs.slice();
  }
  getSong(index: number) {
    return this.songs[index];
  }

  addSong(song: Song) {
    this.songs.push(song);
    this.songsChanged.next(this.songs.slice());
  }

  addSongs(songs: Song[]) {
    this.songs.push(...songs);
    this.songsChanged.next(this.songs.slice());
  }

  updateSong(index: number, newSong: Song){
    this.songs[index] = newSong;
    this.songsChanged.next(this.songs.slice());
  }
  deleteSong(index: number){
    this.songs.splice(index, 1);
    this.songsChanged.next(this.songs.slice());
  }
}
