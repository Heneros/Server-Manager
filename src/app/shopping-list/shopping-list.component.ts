import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


import { Song } from '../shared/song.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  songs: Song[];
  private igChangeSub: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.songs = this.slService.getSongs();
    this.igChangeSub = this.slService.songsChanged
      .subscribe(
        (songs: Song[]) => {
          this.songs = songs;
        }
      );
  }
  onEditSong(index: number){
    this.slService.startedEditing.next(index);
  }
  ngOnDestroy(): void {
   this.igChangeSub.unsubscribe();
  }
}
