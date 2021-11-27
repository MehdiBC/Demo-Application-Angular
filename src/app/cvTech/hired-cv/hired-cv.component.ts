import { Component, OnInit } from '@angular/core';
import {CvService} from '../../service/cv.service';
import {Person} from '../../model/Person';

@Component({
  selector: 'app-hired-cv',
  templateUrl: './hired-cv.component.html',
  styleUrls: ['./hired-cv.component.css']
})
export class HiredCvComponent implements OnInit {

  constructor(private readonly cvService: CvService) { }

  ngOnInit(): void {
  }

  getHiredPersons(): Person[] {
    return this.cvService.getHiredPersons();
  }
}
