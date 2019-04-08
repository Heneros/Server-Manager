import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Music } from '../../shared/music.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('bandInput') bandInputRef: ElementRef;
@ViewChild('songInput') songInputRef: ElementRef;
  constructor(private slService: ShoppingListService ) { }

  ngOnInit() {
  }
  onAddItem(){
    const muBand = this.bandInputRef.nativeElement.value;
    const muSong = this.songInputRef.nativeElement.value;
    const newMusic = new Music(muBand, muSong);
    this.slService.addMusic(newMusic);

  }

}
