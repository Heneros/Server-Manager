import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

import { Music } from '../../shared/music.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameInputRef: ElementRef;
@ViewChild('amountInput') amountInputRef: ElementRef;
@Output() musicAdded = new EventEmitter<Music>();
  constructor() { }

  ngOnInit() {
  }
  onAddItem(){
    const muName = this.nameInputRef.nativeElement.value;
    const muAmount = this.amountInputRef.nativeElement.value;
    const newMusic = new Music(muName, muAmount);
    this.musicAdded.emit(newMusic);


  }

}
