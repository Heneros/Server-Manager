import {
  Component,
  OnInit,
  ElementRef,
  ViewChild
} from '@angular/core';

import { Song } from '../../shared/song.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const newSong = new Song(ingName);
    this.slService.addSong(newSong);
  }

}
