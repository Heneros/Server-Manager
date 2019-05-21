import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ShoppingListService } from '../shopping-list.service';
import { AddMusic } from '../../shared/add-music.model';


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
    const newMusic = new AddMusic(muBand, muSong);
    this.slService.addMusic(newMusic);

  }

}
