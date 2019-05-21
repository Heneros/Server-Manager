import { Music } from '../shared/music.model';
import { EventEmitter } from '@angular/core';



export class ShoppingListService {
  musicChanged = new EventEmitter<Music[]>();
  private songs: Music[] = [
      new Music('Mac Quayle - youaremy4nswer.msv'),
      new Music('Mac Quayle - Memories'),
  ];

  getMusic(){
      return this.songs.slice();
  }

  addMusic(music: Music){
  this.songs.push(music);
  this.musicChanged.emit(this.songs.slice());
  }
  
  addSongs(songs: Music[]){
    this.songs.push(...songs);
    this.musicChanged.emit(this.songs.slice());
  }
}