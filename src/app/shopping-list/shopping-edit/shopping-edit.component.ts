import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Song } from '../../shared/song.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
 @ViewChild('f', {static: false})slForm: NgForm;
subscription: Subscription;
editMode = false;
editedSongIndex: number;
editedSong: Song;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() { 
    this.subscription = this.slService.startedEditing
    .subscribe(
      (index: number) => {
        this.editedSongIndex = index;
        this.editMode = true;
        this.editedSong = this.slService.getSong(index);
        this.slForm.setValue({
          name: this.editedSong.name
        })
        
      }
    )
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newSong = new Song(value.name);
    if(this.editMode){
      this.slService.updateSong(this.editedSongIndex, newSong);
    }else{
      this.slService.addSong(newSong);
    }
    this.editMode = false;
    form.reset();
  }
  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete(){
    this.slService.deleteSong(this.editedSongIndex);
    this.onClear();

  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}



