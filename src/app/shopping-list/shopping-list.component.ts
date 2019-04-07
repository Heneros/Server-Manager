import { Component, OnInit } from '@angular/core';

import { Music } from '../shared/music.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  songs: Music[] = [
    new Music('Slipknot', 'Dead Memories'),
    new Music('Metallica', 'Master of Puppets'),
  ];

  constructor() { }

  ngOnInit() {
  }
onMusicAdded(song: Music){
  this.songs.push(song);
}
}
