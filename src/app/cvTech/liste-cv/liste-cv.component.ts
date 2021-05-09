import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../../Model/Personne';
import {CvService} from '../cv.service';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.css']
})
export class ListeCvComponent implements OnInit {
  @Input() personnel: Personne[] | undefined;
  @Output() selectedPersonne = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  selectedPerson(input: any): void{
    this.selectedPersonne.emit(
      input
    );
  }
}
