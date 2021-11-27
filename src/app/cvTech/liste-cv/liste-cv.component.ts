import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from '../../model/Person';
import {CvService} from '../../service/cv.service';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.css']
})
export class ListeCvComponent implements OnInit {
  @Input() personnel: Person[] | undefined;
  @Output() selectedPersonne = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  selectedPerson(person: Person): void{
    this.selectedPersonne.emit(
      person
    );
  }
}
