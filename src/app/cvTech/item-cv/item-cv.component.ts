import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from '../../model/Person';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {
  @Input() person = new Person();
  constructor() { }

  ngOnInit(): void {
  }
}
