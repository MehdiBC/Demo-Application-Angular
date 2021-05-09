import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../../Model/Personne';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  @Input() personne: Personne | undefined;
  constructor() { }

  ngOnInit(): void {
  }
}
