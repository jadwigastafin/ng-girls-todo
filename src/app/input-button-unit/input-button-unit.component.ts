import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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

  title = 'Hello';
  title2: string;
  title3: string = 'Chce to wyswietlic';

  constructor() {
  }

  ngOnInit() {
  }

  submitValue(newTitle: string) {
    // this.title = newTitle;
    // console.log(this.title, 'Tytuł zmienajacy sie na keyup');
    // console.log(event, 'event');
    this.submitNewItem.emit(newTitle);
  }

}
