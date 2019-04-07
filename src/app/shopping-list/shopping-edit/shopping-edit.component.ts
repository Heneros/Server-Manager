import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

import { Music } from '../../shared/music.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('bandInput') bandInputRef: ElementRef;
@ViewChild('songInput') songInputRef: ElementRef;
@Output() musicAdded = new EventEmitter<Music>();
  constructor() { }

  ngOnInit() {
  }
  onAddItem(){
    const muBand = this.bandInputRef.nativeElement.value;
    const muSong = this.songInputRef.nativeElement.value;
    const newMusic = new Music(muBand, muSong);
    this.musicAdded.emit(newMusic);

  }

}
