import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {

  @Output() submitNewItem: EventEmitter<string> = new EventEmitter();

  // submitNewItem - nazwa Outputa, typ EventEmitter, ma metode emit
  // EventEmitter - typ generyczny, przekazujemy do niego inny typ,
  // który będzie uzywany wewnatrz tego typu
  // teraz event będzie emitowany do komponentu rodzica przez Output

  title = '';
  title2: string;
  title3: string = 'Chce to wyswietlic';

  constructor() {
  }

  ngOnInit() {
  }

  submitValue(newTitle: NgForm) {
    const updatedTitle = newTitle.value.title;
    if (newTitle.valid) {
      this.submitNewItem.emit(updatedTitle);
      newTitle.resetForm();
    } else {
      alert('Form invalid');
    }
  }

}
