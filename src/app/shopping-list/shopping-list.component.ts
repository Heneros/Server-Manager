import { Component, OnInit } from '@angular/core';

import { Music } from '../shared/music.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  songs: Music[] = [
    new Music('Slipknot', 5),
    new Music('Metallica', 10),
  ];

  constructor() { }

  ngOnInit() {
  }
onMusicAdded(song: Music){
  this.songs.push(song);
}
}
