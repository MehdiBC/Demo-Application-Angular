import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Input() filsProp = 'red';
  @Output() request = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  sendRequest(){
    this.request.emit(
      this.filsProp.concat(' is the color')
    );
  }
}
