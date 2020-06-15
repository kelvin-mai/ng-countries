import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  showOptions = false;

  @Input()
  placeholder: string;

  @Input()
  values: string[];

  @Input()
  value: string;

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter();

  select(value: string) {
    this.valueChange.emit(value);
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }
}
