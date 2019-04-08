import { Component, OnInit } from '@angular/core';

import { Music } from '../shared/music.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  songs: Music[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.songs = this.slService.getMusic();
    this.slService.musicChanged 
    .subscribe(
      (songs: Music[]) =>{
        this.songs = songs;
      }
    );
  }

}
